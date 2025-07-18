import axios from 'axios';
import { mockFetchCurrentWeather, mockFetchWeatherConditionDistribution, mockFetchHistoricalTemperature, mockFetchMinMaxTemperatureTrends } from './mockWeatherApi';
const API_BASE_URL = 'http://localhost:5000/api/weather';
const useMockData = true;


export const fetchCurrentWeather = async () => {
    if (useMockData) {
        return mockFetchCurrentWeather;
    }
    else {
        const response = await axios.get(`${API_BASE_URL}/current`);
        return response.data as CurrentWeatherEntry;
    }
};
export const fetchHistoricalTemperature = async (): Promise<HistoricalTemperatureEntry[]> => {
    if (useMockData) {
        return mockFetchHistoricalTemperature;
    }
    else {
        const response = await axios.get(`${API_BASE_URL}/historical`);
        return response.data as HistoricalTemperatureEntry[];
    }
};
export const fetchWeatherConditionDistribution = async (): Promise<WeatherCondition[]> => {
    if (useMockData) {
        return mockFetchWeatherConditionDistribution;
    }
    else {
        const response = await axios.get(`${API_BASE_URL}/distribution`);
        return response.data as WeatherCondition[];
    }
};
export const fetchMinMaxTemperatureTrends = async (): Promise<TemperatureTrend[]> => {
    if (useMockData) {
        return mockFetchMinMaxTemperatureTrends;
    }
    else {
        const response = await axios.get(`${API_BASE_URL}/minmax`);
        return response.data as TemperatureTrend[];
    }
};


export interface CurrentWeatherEntry {
    time: string;
    temperature: number;
    condition: string;
    humidity: number;
}
export interface HistoricalTemperatureEntry {
    time: string;
    temperature: number;
}

export interface TemperatureTrend {
    date: string;
    min: number;
    max: number;
}

export interface WeatherCondition {
    condition: string;
    count: number;
}