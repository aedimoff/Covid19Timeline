import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';

import {dateCodes} from './dates'
const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/43582253126b56f90b942f80eee13156/raw/statesnumeric.json'

    Promise.all([
        json('https://d3js.org/us-10m.v1.json'),
        json(jsonUrl)
    ]).then(([topoJSONData, covidData]) => {

    const svg = select('svg')
    // .attr('width', 90vw)
    // .attr('height', 1000)

    const path = geoPath()

    const states = feature(topoJSONData, topoJSONData.objects.states)
    svg.selectAll('path').data(states.features)
    .enter().append('path')
        .attr('class', 'state')
        .attr('id',(d => d.id))
        .attr('d', path)
        .attr('fill', (d => setColor(dateCodes[1], d.id)))
    .append('title')
        .text(d => d.id)
    // gives state id as tooltip, need to change to name
    


    d3.selectAll("input").on("input", function change() {
        const date = dateCodes[this.value];
        d3.selectAll("path").style("fill", function (d) {
            return setColor(date, d.id)
        })
    })

    function getStatsByMonth(selectedMonth, stateId) {
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
        if(stats < 5000) {
            return "rgb(201, 207, 215)"
        } else if(stats > 5000 && stats <= 10000) {
            return "rgb(246, 217, 176)"
        } else if(stats > 10000 && stats <= 30000) {
            return "rgb(254, 190, 114)" 
        } else if (stats > 30000 && stats <= 100000) {
            return "rgb(207, 104, 93)"
        } else if (stats > 100000) {
            return "rgb(149, 50, 49)"
        }
        
    }

});








