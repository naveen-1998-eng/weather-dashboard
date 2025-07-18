import React, { useEffect, useState } from 'react';
import { fetchHistoricalTemperature, HistoricalTemperatureEntry } from '../api/weatherApi';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend);

const HistoricalTemperatureChart: React.FC = () => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: HistoricalTemperatureEntry[] = await fetchHistoricalTemperature();
            setChartData({
                labels: data.map((entry: any) => entry.time),
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: data.map((entry: any) => entry.temperature),
                        borderColor: 'rgba(75,192,192,1)',
                        fill: false,
                    },
                ],
            });
        };
        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;
    
    return (<>
        <Box sx={{ width: '100%', height: '350px', margin: '0 1em' }}>
            <Line data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Historical Temperature',
                        },
                    },
                }} />
        </Box>
    </>);
};
export default HistoricalTemperatureChart;
