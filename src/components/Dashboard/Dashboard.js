import React from 'react';
import Chart1 from '../Chart1/Chart1';
import Chart2 from '../Chart2/Chart2';

const Dashboard = () => {
    return (
        <div className='my-8 justify-items-center'>
            <h2>hello from Dashboard</h2>
            <div className='my-4'>
                <p>Monthly Sell Chart</p>
                <div className='flex justify-center'>
                    <Chart1 ></Chart1>
                </div>
            </div>
            <div className='my-4'>
                <p>Monthly Revenue Chart</p>
                <div className='flex justify-center'>
                    <Chart2></Chart2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;