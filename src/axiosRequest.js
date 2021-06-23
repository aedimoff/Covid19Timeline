import axios from 'axios';
const api_key = require("../config/keys").API_KEY

export const requestData = (start, end, code) => {
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'GET',
            url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
            params: { end_date: end, start_date: start, statecode: code },
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
            }
        }).then(response => {
            // console.log("axios response", response)
            resolve(response)
        })
            .catch(error => {
                console.error('auth.error', error);
                reject(error)
            });
    });
};