import React from 'react'
import { Chart } from 'react-google-charts'

export const data = [
  ['Skill', 'Applicants with Skill'],
  ['Python', 550],
  ['C++', 200],
  ['Java', 150],
  ['React.js', 400],
  ['UI/UX', 100],
]

export const options = {
  title: 'Skill Distribution',
}

export function Pie() {
  return (
    <div className='flex flex-col'>
      <h3 className='applicants'>SKILLS</h3>
      <Chart
        chartType='PieChart'
        data={data}
        options={options}
        height={'400px'}
      />
    </div>
  )
}
