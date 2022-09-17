import React from 'react'
import './drag-drop.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

// import data_file from "./Nafisa-v1-Sample-Data.json";

const data = [
  {
    name: '8/9/22',
    Applicants: 20,
    Hired: 60,
    amt: 2400,
  },
  {
    name: '8/10/22',
    Applicants: 35,
    Hired: 20,
    amt: 2210,
  },
  {
    name: '8/11/22',
    Applicants: 87,
    Hired: 50,
    amt: 2290,
  },
  {
    name: '8/12/22',
    Applicants: 50,
    Hired: 30,
    amt: 2000,
  },
  {
    name: '8/13/22',
    Applicants: 25,
    Hired: 60,
    amt: 2181,
  },
]

export default function LineGraph() {
  return (
    <div className='flex flex-col'>
      <h3 className='applicants'>APPLICATIONS BY DAY</h3>
      <LineChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 25,
          bottom: 10,
          left: -18,
        }}
      >
        <CartesianGrid strokeDasharray='1 1' strokeWidth={2} />
        <XAxis dataKey='name' strokeWidth={2} />
        <YAxis strokeWidth={2} />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='Applicants'
          stroke='#8884d8'
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          strokeWidth={3}
          dataKey='Hired'
          stroke='#82ca9d'
        />
      </LineChart>
    </div>
  )
}
