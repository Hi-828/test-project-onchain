"use client"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'JAN',
        uv: 200,
        pv: 100,
    },
    {
        name: 'FEB',
        uv: 200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'MAR',
        uv: 100,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'APR',
        uv: 300,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'JUN',
        uv: 700,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'JUL',
        uv: 500,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'AUG',
        uv: 500,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'SEP',
        uv: 400,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'OCT',
        uv: 800,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'NOV',
        uv: 900,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'DEC',
        uv: 900,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '',
        uv: 900,
        pv: 4300,
        amt: 2100,
    },
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip item-center">
                <p className="flex justify-center items-center" style={{ color: '#c86c00', fontWeight: 'bold' }}>{`${label} , ${payload[0].value}`}</p>
                <style jsx>{`
                    .custom-tooltip {
                        background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
                        border-radius: 20px; /* More rounded corners */
                        padding: 2x;
                        width:100px;
                        border: 2px solid #c86c00;
                    }
                `}</style>
            </div>
        );
    }

    return null;
};
export default class ChartG extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height={390}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 0,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor="#FF6800" stopOpacity={1} />
                            <stop offset="100%" stopColor="#FD97FF" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6 10" vertical={false} />
                    <XAxis hide={false} height={40}  dataKey="name" tick={{ fill: 'white' }}/>
                    <YAxis axisLine={false} tickCount={10} tickLine={false} tick={{ fill: 'white' }}/>
                    <Tooltip content={<CustomTooltip />}  cursor={{ stroke: '#FF6800', strokeWidth: 2 }}/>
                    <Area type="linear" dataKey="uv" fill="url(#colorUv)" stroke="#c86c00" activeDot={{ stroke: '#c86c00', strokeWidth: 2, fill: '#c86c00' }} />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}