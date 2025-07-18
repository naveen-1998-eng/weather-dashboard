/* eslint-disable */
import React from 'react';
import './Dashboard.css'; // Import the CSS file
import CurrentWeather from '../components/CurrentWeather';
import HistoricalTemperatureChart from '../components/HistoricalTemperatureChart';
import WeatherConditionPieChart from '../components/WeatherConditionPieChart';
import MinMaxTemperatureTrends from '../components/MinMaxTemperatureTrends';
import { Typography, Card, CardContent } from '@mui/material';

const Dashboard: React.FC = () => {
    return (
        <div className="grid-container">
            <Typography variant="h4" className="grid-item header" sx={{ textAlign: 'center', paddingTop: '0.2em' }}>
                Weather Dashboard
            </Typography>
            <Card className="grid-item">
                <CardContent>
                    <CurrentWeather />
                </CardContent>
            </Card>
            <Card className="grid-item grid-item-half">
                <CardContent>
                    <HistoricalTemperatureChart />
                </CardContent>
            </Card>
            <Card className="grid-item grid-item-half">
                <CardContent>
                    <WeatherConditionPieChart />
                </CardContent>
            </Card>
            <Card className="grid-item">
                <CardContent>
                    <MinMaxTemperatureTrends />
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;