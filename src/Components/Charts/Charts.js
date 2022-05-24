import React, { useEffect, useState } from 'react';
import {
    Line,
    PieChart,
    Pie,
    LineChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    BarChart,
    AreaChart,
    CartesianGrid,
    } 
from "recharts";
const Charts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return (
        <div className='grid grid-cols-2 gap-6 justify-center items-center pt-12 pb-10 mb-5 '>
            <div className='border'>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey={'investment'} ></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='border'>
                <BarChart width={400} height={300} data={data}>
                    <Bar dataKey='investment' fill='#1c6ced'></Bar>
                    <Bar dataKey='revenue' fill='#6cad74'></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                </BarChart>
            </div>
            <div>
                <AreaChart width={400} height={300} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div>
                <PieChart width={400} height={300}>
                    <Pie
                        dataKey="sell"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="investment" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
        </div >
    );
};


export default Charts;