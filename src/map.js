import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';


export const renderMap = (date) => {
    const jsonUrl = 'https://gist.githubusercontent.com/aedimoff/43582253126b56f90b942f80eee13156/raw/statesnumeric.json'

    Promise.all([
        json('https://d3js.org/us-10m.v1.json'),
        json(jsonUrl)
    ]).then(([topoJSONData, covidData]) => {

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

    const states = feature(topoJSONData, topoJSONData.objects.states)
    svg.selectAll('path').data(states.features)
    .enter().append('path')
        .attr('class', 'state')
        .attr('id',(d => d.id))
        .attr('d', path)
        .attr('fill', (d => setColor(date, d.id)))
    .append('title')
        .text(d => d.id)
    // gives state id as tooltip, need to change to name
    });


    const svg = select('svg')
    .attr('width', 960)
    .attr('height', 1000)

    const path = geoPath()


}


