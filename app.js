const express = require('express');
const fetch = require('node-fetch')
const app = express();
const path = require('path');
const stats = require('./routes/stats')
require('dotenv').config();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

// app.get('/data', (req, res) => {
    //     fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSStateCodesAndNames", {
        //         "method": "GET",
        //         "headers": {
            //             "x-rapidapi-key": `${process.env.API_KEY}`,
            //             "x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com"
            //         }
            //     })
            
            // })
            
app.use('/stats', stats)
             
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})