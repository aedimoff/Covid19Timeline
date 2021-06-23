import { select, json, geoPath, csv, tsv } from 'd3';
import { feature } from 'topojson-client';
import axios from 'axios';
const api_key = require("../config/keys").API_KEY

// const requestData = (start = '2021-01-01', end = '2021-01-30', code = 'CO') => {
//     return new Promise((resolve, reject) => {
//         axios.request({
//             method: 'GET',
//             url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
//             params: { end_date: end, start_date: start, statecode: code },
//             headers: {
//                 'x-rapidapi-key': api_key,
//                 'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
//             }
//         }).then(response => {
//             resolve(response)
//         })
//             .catch(error => {
//                 console.error('auth.error', error);
//                 reject(error)
//             });
//     });
// };


const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/87cfc8efa16c8c08ca4ef83bc8afbe50/raw/stats.json'
// const fetchData = async (url) => {
//     const response = await fetch(url);
//     return await response.text();
// };

    Promise.all([
        json('https://d3js.org/us-10m.v1.json'),
        json(jsonUrl)
    ]).then(([topoJSONData, covidData]) => {
        //this will be a function call later
        
        const setColor = (date, id) => {
            console.log(covidData[date])
        }

        const states = feature(topoJSONData, topoJSONData.objects.states)
        console.log("states", states)
        svg.selectAll('path').data(states.features)
        .enter().append('path')
            .attr('class', 'state')
            .attr('id',(d => d.id))
            .attr('d', path)
            .attr('fill', (d => colors(d.id)))
        .append('title')
            .text(d => d.id)
        // gives state id as tooltip, need to change to name
    });
     



const svg = select('svg')
.attr('width', 960)
.attr('height', 1000)

const path = geoPath()

const colors = (code) => {
    if (parseInt(code) >= 0 && parseInt(code) <= 25) {
        return 'red'
    } else {
        return 'lightgreen'
    }
}



