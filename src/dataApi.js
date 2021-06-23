import fetch from 'node-fetch';
const api_key = require("../config/keys").API_KEY

export const getData = (start = '2021-01-01', end = '2021-01-30', code = 'CO') => {
    fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateCodesAndNames", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
            "x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}
