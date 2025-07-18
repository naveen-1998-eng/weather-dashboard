import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HistoricalTemperatureChart from '../HistoricalTemperatureChart';
import { fetchHistoricalTemperature } from '../../api/weatherApi';

// 🧪 Mock the API
jest.mock('../../api/weatherApi', () => ({
  fetchHistoricalTemperature: jest.fn(),
}));

const mockData = [
  { time: '2023-07-10T10:00:00Z', temperature: 28 },
  { time: '2023-07-10T11:00:00Z', temperature: 30 },
  { time: '2023-07-10T12:00:00Z', temperature: 31 },
];

describe('HistoricalTemperatureChart', () => {
  it('shows loading initially', () => {
    (fetchHistoricalTemperature as jest.Mock).mockResolvedValue(mockData);
    render(<HistoricalTemperatureChart />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders canvas after fetching chart data', async () => {
    (fetchHistoricalTemperature as jest.Mock).mockResolvedValue(mockData);
    render(<HistoricalTemperatureChart />);

    await waitFor(() => {
      const canvas = screen.getByRole('img', { hidden: true }) || document.querySelector('canvas');
      expect(canvas).toBeInTheDocument();
    });
  });
});
