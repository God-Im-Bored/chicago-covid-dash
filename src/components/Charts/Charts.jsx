import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line } from 'react-chartjs-2'
import styles from './Charts.module.css'


const Charts = ( { data } ) => {
    const [dailyData, setDailyData] = useState([])
    // console.log('county data -->', data)

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    const lineChart = dailyData.length ? (
        <Line 
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
                        borderColor: 'rgba(0, 0, 0, 0.7)',
                        fill: true
                    }
                ]
            }}
        
        />

    ) : null

    
    
    return (
        dailyData.length ? console.log(dailyData) : null,
        <div className={styles.container}>
            <h2>Charts</h2>
            {lineChart}
        </div>
    )
}

export default Charts