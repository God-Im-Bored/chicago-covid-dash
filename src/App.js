import React from 'react'
import styles from './App.module.css'
import { fetchCountyData } from './api'
import { Cards, Charts } from "./components";

class App extends React.Component {
  state = {
    countyData: [],
    stateData: {}
  }

  async componentDidMount() {
    const covidData = await fetchCountyData()

    this.setState({
      countyData: covidData,
      stateData: covidData[0]
    })

    
    
  }

  render() {
    const { stateData} = this.state
    return (
      <div className={styles.container}>
        <pre>Chicago Covid Mapping</pre>
        <Cards data={stateData} />
        
        <Charts />
        {/* <Map /> */}


      </div>
    )
  }
}


export default App

