import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart1 = () => {
    const [data, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, []);
    return (
        <LineChart width={800} height={400} data={data}>
            <Line dataKey={'sell'} stroke="red"></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
        </LineChart>
    );
};

export default Chart1;