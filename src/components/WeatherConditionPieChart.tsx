import React, { useEffect, useState } from 'react';
import { fetchWeatherConditionDistribution, WeatherCondition } from '../api/weatherApi';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, LineElement, ArcElement, Title, Tooltip, Legend);

const WeatherConditionPieChart: React.FC = () => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: WeatherCondition[] = await fetchWeatherConditionDistribution();
            setChartData({
                labels: data.map((entry: any) => entry.condition),
                datasets: [
                    {
                        data: data.map((entry: any) => entry.count),
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            });
        };
        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;

    return (
        <Box sx={{ width: '100%', height: '350px', margin: '0 1em', marginBottom: '1em' }} >
            <Pie
                data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Weather Condition Distribution',
                        },
                    },
                }}
            />
        </Box>
    );
};

export default WeatherConditionPieChart;