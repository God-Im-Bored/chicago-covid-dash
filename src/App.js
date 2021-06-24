import React from 'react'
import styles from './App.module.css'
import { fetchCountyData, fetchStateData } from './api'
import { Cards, Charts, Map } from "./components";

class App extends React.Component {
  state = {
    countyData: []
  }

  async componentDidMount() {
    // const apiData = await fetchData()
    // console.log(apiData)

    const $ = await fetchStateData()
    console.log($)

    

    const covidData = await fetchCountyData()

    this.setState({
      countyData: covidData
    })

    
    
  }

  render() {
    // console.log(this.state)
    return (
      <div className={styles.container}>
        <pre>Chicago Covid Mapping</pre>
        
        <Charts />
        <Map />
        <Cards />


      </div>
    )
  }
}


export default App

