import { select, json, geoPath, geoMercator } from 'd3';
import { feature } from 'topojson-client';

const svg = select('svg')
    .attr('width', 960)
    .attr('height',1000)

const path = geoPath()

json('https://d3js.org/us-10m.v1.json')
    .then( data => {
        const states = feature(data, data.objects.states)
        svg.selectAll('path')
        .data(states.features)
        .enter().append('path')
            .attr('d', path);
    });