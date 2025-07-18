const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');
const {
    fetchCurrentWeather,
    fetchHistoricalTemperature,
    fetchWeatherConditionDistribution,
    fetchMinMaxTemperatureTrends,
} = require('../weatherApi');
const {
    mockFetchCurrentWeather,
    mockFetchHistoricalTemperature,
    mockFetchWeatherConditionDistribution,
    mockFetchMinMaxTemperatureTrends,
} = require('../mockWeatherApi');

import type {
    CurrentWeatherEntry,
    HistoricalTemperatureEntry,
    WeatherCondition,
    TemperatureTrend,
} from '../weatherApi';

const API_BASE_URL = 'http://localhost:5000/api/weather';

describe('Weather API - Real Mode with axios-mock-adapter (require + TS)', () => {
    let mock: InstanceType<typeof AxiosMockAdapter>;

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    test('fetchCurrentWeather returns API data', async () => {
        const mockData: CurrentWeatherEntry = mockFetchCurrentWeather;

        mock.onGet(`${API_BASE_URL}/current`).reply(200, mockData);

        const result = await fetchCurrentWeather();
        expect(result).toEqual(mockData);
    });

    test('fetchHistoricalTemperature returns API data', async () => {
        const mockData: HistoricalTemperatureEntry[] = mockFetchHistoricalTemperature;

        mock.onGet(`${API_BASE_URL}/historical`).reply(200, mockData);

        const result = await fetchHistoricalTemperature();
        expect(result).toEqual(mockData);
    });

    test('fetchWeatherConditionDistribution returns API data', async () => {
        const mockData: WeatherCondition[] = mockFetchWeatherConditionDistribution;

        mock.onGet(`${API_BASE_URL}/distribution`).reply(200, mockData);

        const result = await fetchWeatherConditionDistribution();
        expect(result).toEqual(mockData);
    });

    test('fetchMinMaxTemperatureTrends returns API data', async () => {
        const mockData: TemperatureTrend[] = mockFetchMinMaxTemperatureTrends;
        mock.onGet(`${API_BASE_URL}/minmax`).reply(200, mockData);

        const result = await fetchMinMaxTemperatureTrends();
        expect(result).toEqual(mockData);
    });
});
