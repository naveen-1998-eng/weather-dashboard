import React, { useEffect, useState } from 'react';
import { fetchMinMaxTemperatureTrends, TemperatureTrend } from '../api/weatherApi';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MinMaxTemperatureTrends: React.FC = () => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: TemperatureTrend[] = await fetchMinMaxTemperatureTrends();
            setChartData({
                labels: data.map((entry: any) => entry.date),
                datasets: [
                    {
                        label: 'Min Temperature (°C)',
                        data: data.map((entry: any) => entry.min),
                        backgroundColor: 'rgba(75,192,192,0.4)',
                    },
                    {
                        label: 'Max Temperature (°C)',
                        data: data.map((entry: any) => entry.max),
                        backgroundColor: 'rgba(255,99,132,0.4)',
                    },
                ],
            });
        };
        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;
    return (<>
        <Bar data={chartData} />
    </>);
};

export default MinMaxTemperatureTrends;