import React from 'react'
import Chart from 'react-apexcharts';
import './DonutCircle.scss'

export const DonutCircle = (data) => {
    console.log(data)
    const series = data.percentageData?.percentage;
    const option = {
        chart: {
            type: 'donut',
        },
        title: {
            align: 'right',
            style: {
                fontFamily: 'Regular'
            }
        },
        colors: ["#0092FC", "#FF7373", "#FFE071", "#69CD7F"],
        labels: data.percentageData?.labels,
    }


    return (
        <div className='donut'>
            <Chart options={option} series={series} width={'390px'} type='donut' />
        </div>
    )
}
