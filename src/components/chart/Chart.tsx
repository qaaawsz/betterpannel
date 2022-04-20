import React from 'react'
import './chart.scss'
import {AreaChart, ResponsiveContainer, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const data = [
    {name: 'January', Total: 5067},
    {name: 'February', Total: 2735},
    {name: 'March', Total: 8942},
    {name: 'April', Total: 6539},
    {name: 'May', Total: 8000},
    {name: 'June', Total: 7535},
    {name: 'July', Total: 9200},
    {name: 'August', Total: 7843},
    {name: 'September', Total: 5459},
]

const Chart = () => {
    return (
        <div className="chart">
            <div className="wrapper">
                <div className="title">Last Year (Revenue)</div>
                <ResponsiveContainer width="100%" aspect={2 / 1}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="Total" stroke="#82ca9d" fill="#82ca9d"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
