import React from "react";
import styles from "./App.module.css";
import { fetchCountyData } from "./api";
import { Cards, Charts, Counties } from "./components";

class App extends React.Component {
  state = {
    countyData: [], // array of county objects
    countyNames: [], // array of county string names
    stateData: {}, // singular object with state cd data
    county: '', // string of county name selected
    selected: {}

  };

  async componentDidMount() {
    const covidData = await fetchCountyData();

    this.setState({
      countyData: covidData,
      stateData: covidData[0],
      countyNames: covidData.map((county) => county.county),
    });
  }

  handleChange = async (county) => {
    const { countyData } = this.state;

    if (countyData) {
      const len = countyData.length;

      for (let i = 0; i < len; i++) {
        if (countyData[i].county === county) {
          this.setState({
            county: county,
            selected: countyData[i]
          })
        }
      }
    }
  };

  render() {
    const { stateData, county, selected, countyNames } = this.state;
    return (
      <div className={styles.container}>
        <pre>Chicago Covid Mapping</pre>
        <Cards data={stateData} />
        <Counties data={countyNames} handleChange={this.handleChange} />
        <Charts county={county} selected={selected}/>
      </div>
    );
  }
}

export default App;
