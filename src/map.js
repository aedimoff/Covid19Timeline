import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import {getDates, dateCodes} from './dates'
let slider = document.getElementById('range-slider')
let output = document.getElementById('value')

slider.oninput = function() {
    output.innerHTML = getDates[this.value];
    d3.select("svg").selectAll("*")
    // d3.select("svg").selectAll("*").remove();
    // renderMap(dateCodes[this.value])
}

    const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/43582253126b56f90b942f80eee13156/raw/statesnumeric.json'

    Promise.all([
        json('https://d3js.org/us-10m.v1.json'),
        json(jsonUrl)
    ]).then(([topoJSONData, covidData]) => {

    const svg = select('svg')
    .attr('width', 960)
    .attr('height', 1000)

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
        console.log(date)
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

});








