import { select, json, geoPath } from 'd3';
import { feature } from 'topojson-client';

import {dateCodes} from './dates'
const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/43582253126b56f90b942f80eee13156/raw/statesnumeric.json'
    Promise.all([
        json('https://d3js.org/us-10m.v1.json'),
        json(jsonUrl)
    ]).then(([topoJSONData, covidData]) => {

    const svg = select('#map-svg')
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
            return "rgb(201, 207, 215)" //$light-blue
        } else if(stats > 5000 && stats <= 10000) {
            return "rgb(166, 185, 211)" //$may-blue
        } else if(stats > 10000 && stats <= 25000) {
            return "rgb(246, 217, 176)" //$light-yellow
        } else if(stats > 25000 && stats <= 50000) {
            return "rgb(254, 190, 114)" //$yellow
        } else if(stats > 50000 && stats <= 75000) {
            return "rgb(228, 131, 85)" //$dark-yellow
        } else if (stats > 75000 && stats <= 100000) {
            return "rgb(207, 104, 93)" //$salmon
        } else if (stats > 100000 && stats <= 200000) {
            return "rgb(196, 72, 58)" //$orange
        } else if (stats > 200000 && stats <= 300000) {
            return "rgb(201, 55, 52);" //$red
        } else if (stats > 300000) {
            return "rgb(174, 22, 20)" //$bright-red
        }
        
    }

});










