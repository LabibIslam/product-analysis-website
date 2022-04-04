import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart2 = () => {
    const [data, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, []);
    return (
        <BarChart width={600} height={350} data={data}>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="revenue" barSize={30} fill="green"></Bar>
        </BarChart>
    );
};

export default Chart2;