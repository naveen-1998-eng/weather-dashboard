const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');
const {
  fetchCurrentWeather,
  fetchHistoricalTemperature,
  fetchWeatherConditionDistribution,
  fetchMinMaxTemperatureTrends,
} = require('../weatherApi');

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
    const mockData: CurrentWeatherEntry = {
      time: '2025-07-18T10:00:00Z',
      temperature: 32,
      condition: 'Sunny',
      humidity: 60,
    };

    mock.onGet(`${API_BASE_URL}/current`).reply(200, mockData);

    const result = await fetchCurrentWeather();
    expect(result).toEqual(mockData);
  });

  test('fetchHistoricalTemperature returns API data', async () => {
    const mockData: HistoricalTemperatureEntry[] = [
      { time: '2025-07-17T10:00:00Z', temperature: 30 },
      { time: '2025-07-16T10:00:00Z', temperature: 29 },
    ];

    mock.onGet(`${API_BASE_URL}/historical`).reply(200, mockData);

    const result = await fetchHistoricalTemperature();
    expect(result).toEqual(mockData);
  });

  test('fetchWeatherConditionDistribution returns API data', async () => {
    const mockData: WeatherCondition[] = [
      { condition: 'Sunny', count: 10 },
      { condition: 'Rainy', count: 5 },
    ];

    mock.onGet(`${API_BASE_URL}/distribution`).reply(200, mockData);

    const result = await fetchWeatherConditionDistribution();
    expect(result).toEqual(mockData);
  });

  test('fetchMinMaxTemperatureTrends returns API data', async () => {
    const mockData: TemperatureTrend[] = [
      { date: '2025-07-17', min: 25, max: 35 },
      { date: '2025-07-16', min: 24, max: 34 },
    ];

    mock.onGet(`${API_BASE_URL}/minmax`).reply(200, mockData);

    const result = await fetchMinMaxTemperatureTrends();
    expect(result).toEqual(mockData);
  });
});
