import React, { useEffect, useState } from 'react';
import { fetchCurrentWeather } from '../api/weatherApi';
import { Card, CardContent, Typography } from '@mui/material';
import { HistoricalTemperatureEntry } from '../api/weatherApi';

const CurrentWeather: React.FC = () => {
    const [currentWeather, setCurrentWeather] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: HistoricalTemperatureEntry = await fetchCurrentWeather();
            setCurrentWeather(data);
        };
        fetchData();
    }, []);

    if (!currentWeather) return <Typography>Loading...</Typography>;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Current Weather</Typography>
                <Typography>Temperature: {currentWeather.temperature}°C</Typography>
                <Typography>Condition: {currentWeather.condition}</Typography>
                <Typography>Humidity: {currentWeather.humidity}%</Typography>
            </CardContent>
        </Card>
    );
};

export default CurrentWeather;

