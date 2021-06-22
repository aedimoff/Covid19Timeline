import * as Map from './map';
import axios from "axios";
import './stylesheets/style.scss'
const api_key = require("../config/keys").API_KEY

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
        params: { end_date: '2021-01-30', start_date: '2021-01-01', statecode: 'CO' },
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
        }
    };


    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    Map
})

