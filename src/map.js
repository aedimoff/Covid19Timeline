import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import axios from 'axios';
const api_key = require("../config/keys").API_KEY

const requestData = (start = '2021-01-01', end = '2021-01-30', code = 'CO') => {
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
            resolve(response)
        })
            .catch(error => {
                console.error('auth.error', error);
                reject(error)
            });
    });
};


async function getData() {
    try {
        const data = await requestData()
        return data
    } catch (error) {
        console.log(error)
    }
}

        // let count = 0
        // res.data.records.forEach(day => {
        //     count += parseInt(day.cases.dailyconfirmed)
        // });
        // console.log(count)
        // return count;

const stats = getData().then(res => {
    console.log(res.data.records)
})



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



console.log("stats", stats)
json('https://d3js.org/us-10m.v1.json')
    .then(data => {
        const states = feature(data, data.objects.states)
        const stats = getData()
        console.log("in json", stats)
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


