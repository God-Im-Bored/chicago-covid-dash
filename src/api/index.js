import axios from 'axios'

const cheerio = require('cheerio')

const zipUrl = "https://data.cityofchicago.org/resource/yhhz-zm2v.json";

const countiesUrl = 'https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetCountyTestResults'

const illinoisUrl = 'https://coronavirusapi.com/state/IL'


export const fetchData = async () => {
    try {
      const { data } = await axios.get(zipUrl);

      
  
      // refined payload with zip code's total cases, deaths and tests, as well as most recent update
      const refined = data.map((location) => {
        return {
          zip_code: location.zip_code,
          cases_total: location.cases_cumulative,
          deaths_total: location.deaths_cumulative,
          tests_total: location.tests_cumulative,
          last_update: new Date(location.week_end).toDateString(),
        };
      });

      
  
      // filtered payload with only most recently update zip code's instance
      const filtered = Object.values(
        refined.reduce((acc, obj) => {
          const curr = acc[obj.zip_code];
  
          acc[obj.zip_code] = curr
            ? curr.last_update > obj.last_update
              ? obj
              : curr
            : obj;
  
          return acc;
        }, [])
      );
  
      return filtered;
    } catch (error) {
      console.error(error);
    }
  };

// Illinois County's data (name, tested, cases, deaths, lon/lat )
 export const fetchCountyData = async () => {
      try {
          const { data } = await axios.get(countiesUrl)
          const len = data.length
          let testedTotal = 0, casesTotal = 0, deathsTotal = 0

          for (let i = 0; i < len; i++) {
            testedTotal = testedTotal + data[i].tested
            casesTotal = casesTotal + data[i].confirmed_cases
            deathsTotal = deathsTotal + data[i].deaths

          }

          return data.map((county) => ({
              county: county.CountyName,
              tested: county.tested,
              cases: county.confirmed_cases,
              deaths: county.deaths,
              latitude: county.latitude,
              longitude: county.longitude

          }))

      } catch (error) {
          console.error(error)
      }
  }

  // Illinois state data
  export const fetchStateData = async () => {
      const { data } = await axios.get('https://coronavirus.illinois.gov/')
      console.log(cheerio.load(data))
      return cheerio.load(data)

  }


