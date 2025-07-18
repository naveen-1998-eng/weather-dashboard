import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import CurrentWeather from '../CurrentWeather';
import { fetchCurrentWeather } from '../../api/weatherApi';

jest.mock('../../api/weatherApi', () => ({
    fetchCurrentWeather: jest.fn(),
}));

const mockWeatherData = {
    temperature: 27,
    condition: 'Sunny',
    humidity: 60,
};

describe('CurrentWeather', () => {
    it('shows loading text initially', () => {
        (fetchCurrentWeather as jest.Mock).mockResolvedValue(mockWeatherData);

        render(<CurrentWeather />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('renders current weather data after fetch', async () => {
        (fetchCurrentWeather as jest.Mock).mockResolvedValue(mockWeatherData);

        render(<CurrentWeather />);

        await waitFor(() => {
            expect(screen.getByText(/Current Weather/i)).toBeInTheDocument();
            expect(screen.getByText(/Temperature: 27°C/i)).toBeInTheDocument();
            expect(screen.getByText(/Condition: Sunny/i)).toBeInTheDocument();
            expect(screen.getByText(/Humidity: 60%/i)).toBeInTheDocument();
        });
    });
});
