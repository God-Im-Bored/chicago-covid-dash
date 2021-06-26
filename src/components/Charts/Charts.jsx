import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'


const Charts = ( { county, selected } ) => {
    const [dailyData, setDailyData] = useState([])

    console.log(selected)

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    const lineChart = dailyData.length ? (
        <Line 
            options={{
                scales: {
                    y: {
                        max: 5000000
                    }
                }
            }}
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ cases }) => cases),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: "rgba(255, 0, 0, 0.5)",
                        fill: true
                    },
                    {
                        data: dailyData.map(({ tested }) => tested),
                        label: 'Tested',
                        borderColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true
                    }
                ]
            }}
        
        />

    ) : null

    const barChart = selected ? (
        <Bar 
            data={{
                labels: ['Infected', 'Deaths', 'Tested'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: [
                            '#3333ff',
                            "rgba(255, 0, 0, 0.5)",
                            'rgba(0, 255, 0, 0.5)'
                        ],
                        data: [selected.cases, selected.deaths, selected.tested]
                    }
                ]
            }}
            options={{
                legend: { display: false },
                title: { data: true, text: `Current state in ${county}`}
            }}
        
        />        
    ) : null 

    
    
    return (
        
        <div className={styles.container}>
            
            {!selected.county === 'Illinois'
            ? barChart
            : lineChart
            }
        </div>
    )
}

export default Charts