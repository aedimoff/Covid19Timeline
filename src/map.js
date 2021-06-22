import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';

const svg = select('svg')
    .attr('width', 960)
    .attr('height', 1000)

const path = geoPath()

// tsv('https://gist.github.com/mbostock/4090846#file-us-county-names-tsv')
//     .then(data => console.log(data));
//Fetch country codes, need backend request d/t CORS

json('https://d3js.org/us-10m.v1.json')
    .then(data => {
        const states = feature(data, data.objects.states)
        svg.selectAll('path').data(states.features)
            .enter().append('path')
            .attr('class', 'state')
            .attr('d', path)
            .append('title')
            .text(d => d.id)
        // gives state id as tooltip, need to change to name
    });