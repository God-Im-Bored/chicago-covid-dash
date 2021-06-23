import React from 'react'
import styles from './App.module.css'
import { fetchCountyData } from './api'
import { Cards, Charts, Map } from "./components";

class App extends React.Component {
  state = {
    countyData: []
  }

  async componentDidMount() {
    // const apiData = await fetchData()
    // console.log(apiData)

    const covidData = await fetchCountyData()

    this.setState({
      countyData: covidData
    })

    
    
  }

  render() {
    
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

