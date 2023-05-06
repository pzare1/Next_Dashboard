import React, { useEffect, useState } from 'react'
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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function BarChart() {
    const [chartData, setchartData] = useState({
        datasets:[],
    })
    const [chartOptions, setchartOptions] = useState({})
  return (
    <div className='w-6/6 mx-4 md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
       <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default BarChart