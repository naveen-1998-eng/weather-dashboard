import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherConditionPieChart from '../WeatherConditionPieChart';
import { fetchWeatherConditionDistribution } from '../../api/weatherApi';

jest.mock('../../api/weatherApi', () => ({
  fetchWeatherConditionDistribution: jest.fn(),
}));

const mockData = [
  { condition: 'Sunny', count: 30 },
  { condition: 'Rainy', count: 20 },
  { condition: 'Cloudy', count: 10 },
];

describe('WeatherConditionPieChart', () => {
  it('renders loading state initially', () => {
    (fetchWeatherConditionDistribution as jest.Mock).mockResolvedValue(mockData);
    render(<WeatherConditionPieChart />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('displays canvas chart after data is fetched', async () => {
    (fetchWeatherConditionDistribution as jest.Mock).mockResolvedValue(mockData);
    render(<WeatherConditionPieChart />);

    await waitFor(() => {
      expect(document.querySelector('canvas')).toBeInTheDocument();
    });
  });
});
