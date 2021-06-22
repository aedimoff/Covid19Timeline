const express = require('express');
const fetch = require('node-fetch')
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.get('/data', (req, res) => {
    fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateCodesAndNames", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${process.env.API_KEY}`,
            "x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
        }
    })

})

app.get('/codes', (req, res) => {
    fetch("https://covid-19-world-data-by-zt.p.rapidapi.com/GetTotalCounts", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${process.env.API_KEY}`,
            "x-rapidapi-host": "covid-19-world-data-by-zt.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
})

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})