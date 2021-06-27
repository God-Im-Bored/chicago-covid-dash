# Illinois COVID-19 Dashboard

This project is used to track covid-19 updates in Illinois counties.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deoployment notes on how to deploy the project on a live system.

### Prerequisites

- NPM

### Installing

Clone or unzip the repository and navigate to the project directory on your local machine.

```JavaScript
npm install
```

## Deployment

To run the application

```JavaScript
npm start
Navigate to http://localhost:3000/
```

## Live Demo
* https://wonderful-carson-d7f17f.netlify.app/

## Built With
* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - web framework 
* [Material-UI](https://material-ui.com/) - styling framework
* [ChartJs](https://www.chartjs.org/) - charting tool

## Data From
All data provided courtesy of the [IDPH](https://www.dph.illinois.gov/covid19/data-portal)
* [Daily updates](https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetIllinoisCases) - state snapshot data api
* [County covid results](https://idph.illinois.gov/DPHPublicInformation/api/COVIDExport/GetCountyTestResults/) - covid data for counties api