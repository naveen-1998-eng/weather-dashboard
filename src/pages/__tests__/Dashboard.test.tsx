import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

jest.mock('../../components/CurrentWeather', () => () => <div>Mock CurrentWeather</div>);
jest.mock('../../components/HistoricalTemperatureChart', () => () => <div>Mock HistoricalTemperatureChart</div>);
jest.mock('../../components/WeatherConditionPieChart', () => () => <div>Mock WeatherConditionPieChart</div>);
jest.mock('../../components/MinMaxTemperatureTrends', () => () => <div>Mock MinMaxTemperatureTrends</div>);

describe('Dashboard', () => {
  it('renders header and all widgets', () => {
    render(<Dashboard />);

    expect(screen.getByText(/Weather Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock CurrentWeather/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock HistoricalTemperatureChart/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock WeatherConditionPieChart/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock MinMaxTemperatureTrends/i)).toBeInTheDocument();
  });
});
