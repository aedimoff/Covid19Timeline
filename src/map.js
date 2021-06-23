import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import axios from 'axios';
import { stateCodes } from './stateCodes'
//takes number and returns alpha code
const api_key = require("../config/keys").API_KEY


// (start = '2021-01-01', end = '2021-01-30', code="CO")
// for testing requestData
const requestData = (start, end, code) => {
    console.log("in axios", start, end, code)
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
            console.log("axios response", response)
            resolve(response)
        })
            .catch(error => {
                console.error('auth.error', error);
                reject(error)
            });
    });
};

async function getData(start, end, code) {
    console.log("in getData", start, end, code)
    try {
        const data = await requestData(start, end, code)
        console.log("data", data)
        return data
    } catch (error) {
        console.log(error)
    }
}

//gets active case count for state from getData() function based on code and date determined by slider
const activeCaseCount = (start, end, code) => {
    getData(start, end, code).then(res => {
        let count = 0
        res.data.records.forEach(day => {
            count += parseInt(day.cases.dailyconfirmed)
        });
        return count
    })
}

// const getActiveCountSum = (start, end, code) => {
//     let res = activeCaseCount(start, end, code)
//     let count = 0
    
//     console.log("result?", res)
//     // res.data.records.forEach(day => {
//     //     console.log(day)
//     //     // count += parseInt(day.cases.dailyconfirmed)
//     // });

//     // console.log(count)
//     // return count;
// }

let test = activeCaseCount('2021-01-01', '2021-01-30', "HI")
console.log(test)




//for testing
// let res = activeCaseCount('2021-01-01', '2021-01-30', "AZ")
// console.log("firstCall", res)

//needs to set color based on activeCaseCount
const colors = (code) => {
    if (parseInt(code) >= 0 && parseInt(code) <= 25) {
        return 'red'
    } else {
        return 'lightgreen'
    }

const stats = getData().then(res => {
    console.log(res.data.records)
})

}



const svg = select('svg')
.attr('width', 960)
.attr('height', 1000)


const path = geoPath()
json('https://d3js.org/us-10m.v1.json')
    .then(data => {
        const states = feature(data, data.objects.states)
        // const stats = getData()
        // console.log("in json", stats)
        svg.selectAll('path').data(states.features)
            .enter().append('path')
                .attr('class', 'state')
                .attr('id',(d => stateCodes[d.id]))
                .attr('d', path)
                .attr('fill', (d => colors(d.id)))
            .append('title')
                .text((d) => {
                    let code = stateCodes[d.id]
                    // console.log("firstCall", activeCaseCount('2021-01-01', '2021-01-30', code))
                })
        // gives state id as tooltip, need to change to name
    });


