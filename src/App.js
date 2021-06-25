import React from "react";
import styles from "./App.module.css";
import { fetchCountyData } from "./api";
import { Cards, Charts, Counties } from "./components";

class App extends React.Component {
  state = {
    countyData: [],
    countyNames: [],
    stateData: {},
  };

  async componentDidMount() {
    const covidData = await fetchCountyData();

    

    this.setState({
      countyData: covidData,
      stateData: covidData[0],
      countyNames:  covidData.map((county) => county.county)
    });
  }

  render() {
    const { stateData, countyData, countyNames } = this.state;
    return (
      <div className={styles.container}>
        <pre>Chicago Covid Mapping</pre>
        <Cards data={stateData} />
        <Counties data={countyNames} />
        <Charts data={countyData} />

      </div>
    );
  }
}

export default App;
