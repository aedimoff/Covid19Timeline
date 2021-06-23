import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import { getData } from './dataApi';



const svg = select('svg')
    .attr('width', 960)
    .attr('height', 1000)

const path = geoPath()



json('https://d3js.org/us-10m.v1.json')
    .then(data => {
        console.log(svg)
        const states = feature(data, data.objects.states)
        // const stats = getData()
        // console.log("IN JSON", stats)
        svg.selectAll('path').data(states.features)
            .enter().append('path')
            .attr('class', 'state')
            .attr('d', path)
            .attr('fill', 'lightgreen')
            .append('title')
            .text(getData())
        // gives state id as tooltip, need to change to name
    });


