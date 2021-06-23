import React from 'react'
import styles from './App.module.css'
import { fetchData, testing} from './api'
import { Cards, Charts, Map } from "./components";

class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const apiData = await fetchData()

    const test = await testing()

    console.log(test)

    // console.log(apiData)
    
    
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

