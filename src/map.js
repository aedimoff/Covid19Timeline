import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import axios from 'axios';

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


const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/43582253126b56f90b942f80eee13156/raw/statesnumeric.json'



Promise.all([
    json('https://d3js.org/us-10m.v1.json'),
    json(jsonUrl)
]).then(([topoJSONData, covidData]) => {
    //this will be a function call later
    // const selectedMonth = getSlider()
function getStatsByMonth(selectedMonth, stateId) {
        console.log("month in getStatsByMonth", selectedMonth)
        console.log("ID in getStatsByMonth", stateId)
    let stats;

    covidData.forEach(dataSet => {
        for(let date in dataSet) {
            if(date == selectedMonth) {
                stats = dataSet[date][stateId]
            }
        }
    })
    return stats;
}

function setColor(selectedMonth, stateId) {
    let stats = getStatsByMonth(selectedMonth, stateId)
    if(stats < 1000) {
        return "lightgreen"
    } else if(stats > 1000 && stats <= 5000) {
        return "lightblue"
    } else if(stats > 5000 && stats <= 10000) {
        return "yellow" 
    } else if (stats > 10000 && stats <= 30000) {
        return "orange"
    } else if (stats > 30000) {
        return "red"
    }
    
}


const states = feature(topoJSONData, topoJSONData.objects.states)
svg.selectAll('path').data(states.features)
.enter().append('path')
    .attr('class', 'state')
    .attr('id',(d => d.id))
    .attr('d', path)
    .attr('fill', (d => setColor("AP20", d.id)))
.append('title')
    .text(d => d.id)
// gives state id as tooltip, need to change to name
});

        // let count = 0
        // res.data.records.forEach(day => {
        //     count += parseInt(day.cases.dailyconfirmed)
        // });
        // console.log(count)
        // return count;




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



// console.log("stats", stats)
// json('https://d3js.org/us-10m.v1.json')
//     .then(data => {
//         const states = feature(data, data.objects.states)
//         const stats = getData()
//         console.log("in json", stats)
//         svg.selectAll('path').data(states.features)
//             .enter().append('path')
//             .attr('class', 'state')
//             .attr('id',(d => d.id))
//             .attr('d', path)
//             .attr('fill', (d => colors(d.id)))
//             .append('title')
//             .text(d => d.id)
//         // gives state id as tooltip, need to change to name
//     });




    