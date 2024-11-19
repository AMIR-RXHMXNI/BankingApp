'use client';

import { Doughnut } from 'react-chartjs-2';
import React from 'react'


const doughnutChart = ( { accounts } : DoughnutChartProps) => {

    const data = {
        datasets:[
            {
            label: 'Banks',
            data: [1250, 2500,3750],
            backgroundColor:['#0747b6', '#2265d8', '#2265d8']
            }
        ],
        labels: ["Bank 1", "Bank 2", "Bank 3"]
    }
  return <Doughnut 
    data={data} 
    options={{
      cutout: "60%",
      plugins: {
        legend:{
          display: false
        }  
      }
    }}
    
  />
}

export default doughnutChart