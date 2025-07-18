import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MinMaxTemperatureTrends from '../MinMaxTemperatureTrends';
import { fetchMinMaxTemperatureTrends } from '../../api/weatherApi';

// 🧪 Mock the API call
jest.mock('../../api/weatherApi', () => ({
  fetchMinMaxTemperatureTrends: jest.fn(),
}));

const mockTrendData = [
  { date: '2023-07-15', min: 22, max: 32 },
  { date: '2023-07-16', min: 23, max: 33 },
  { date: '2023-07-17', min: 24, max: 34 },
];

describe('MinMaxTemperatureTrends', () => {
  it('displays a loading message initially', () => {
    (fetchMinMaxTemperatureTrends as jest.Mock).mockResolvedValue(mockTrendData);
    render(<MinMaxTemperatureTrends />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders bar chart after data is fetched', async () => {
    (fetchMinMaxTemperatureTrends as jest.Mock).mockResolvedValue(mockTrendData);
    render(<MinMaxTemperatureTrends />);

    await waitFor(() => {
      // Check for canvas presence
      const canvas = document.querySelector('canvas');
      expect(canvas).toBeInTheDocument();
    });
  });
});
