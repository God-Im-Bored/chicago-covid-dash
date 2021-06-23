import axios from 'axios'

const url = "https://data.cityofchicago.org/resource/yhhz-zm2v.json";

const url2 = 'https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetCountyTestResults'


export const fetchData = async () => {
    try {
      const { data } = await axios.get(url);

      
  
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
          const { data: { CountyName, tested, confirmed_cases, deaths, latitude, longitude  } } = await axios.get(url2)

          

      } catch (error) {
          console.error(error)
      }
  }


