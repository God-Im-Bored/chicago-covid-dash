import axios from "axios";

const zipUrl = "https://data.cityofchicago.org/resource/yhhz-zm2v.json";

const countiesUrl =
  "https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetCountyTestResults";

const dailyDataUrl =
  "https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetIllinoisCases";

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
    const { data } = await axios.get(countiesUrl);

    return data.map((county) => ({
      county: county.CountyName,
      tested: county.tested,
      cases: county.confirmed_cases,
      deaths: county.deaths,
      latitude: county.latitude,
      longitude: county.longitude,
    }));
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(dailyDataUrl);

    const modified = data.map((dailyData) => ({
      cases: dailyData.confirmed_cases,
      deaths: dailyData.deaths,
      tested: dailyData.total_tested,
      date: new Date(dailyData.testDate).toLocaleString(),
    }));

    return modified;
  } catch (error) {
    console.error(error);
  }
};
