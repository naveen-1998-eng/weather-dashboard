import { HistoricalTemperatureEntry, CurrentWeatherEntry, TemperatureTrend, WeatherCondition } from './weatherApi';


// Mock data for current weather
export const mockFetchCurrentWeather: CurrentWeatherEntry =
    { time: '2025-07-16T08:00:00Z', temperature: 22, condition: 'Sunny', humidity: 60 };



// Mock data for historical temperature
export const mockFetchHistoricalTemperature: HistoricalTemperatureEntry[] = [
    { time: '2025-07-16T08:00:00Z', temperature: 22 },
    { time: '2025-07-16T09:00:00Z', temperature: 24 },
    { time: '2025-07-16T10:00:00Z', temperature: 26 },
];

export const fetchHistoricalTemperature = async (): Promise<HistoricalTemperatureEntry[]> => {
    return [
        { time: '2025-07-16T08:00:00Z', temperature: 22 },
        { time: '2025-07-16T09:00:00Z', temperature: 24 },
        { time: '2025-07-16T10:00:00Z', temperature: 26 },
    ];
};

// Mock data for weather condition distribution
// Mock data for current weather
export const mockFetchWeatherConditionDistribution: WeatherCondition[] = [
    { condition: 'Sunny', count: 50 },
    { condition: 'Cloudy', count: 30 },
    { condition: 'Rainy', count: 20 },
];
export const fetchWeatherConditionDistribution = async (): Promise<WeatherCondition[]> => {
    return [
        { condition: 'Sunny', count: 50 },
        { condition: 'Cloudy', count: 30 },
        { condition: 'Rainy', count: 20 },
    ];
};

// Mock data for min/max temperature trends

export const mockFetchMinMaxTemperatureTrends: TemperatureTrend[] = [
    { date: '2025-07-15', min: 18, max: 30 },
    { date: '2025-07-16', min: 20, max: 32 },
    { date: '2025-07-17', min: 22, max: 34 },
];
export const fetchMinMaxTemperatureTrends = async (): Promise<TemperatureTrend[]> => {
    return [
        { date: '2025-07-15', min: 18, max: 30 },
        { date: '2025-07-16', min: 20, max: 32 },
        { date: '2025-07-17', min: 22, max: 34 },
    ];
};