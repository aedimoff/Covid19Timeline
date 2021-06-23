import { select, json, geoPath, tsv } from 'd3';
import { feature } from 'topojson-client';
import { requestData } from './axiosRequest';
import { stateCodes } from './stateCodes';
//takes number and returns alpha code

const start = '2021-01-01'
const end = '2021-01-30'
// (start = '2021-01-01', end = '2021-01-30', code="CO")
// for testing requestData


//calls axios request
// async function getData(start, end, code) {
//     try {
//         const data = await requestData(start, end, code)
//         return data.data.records
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getFavorite = (placeId) => {
//     MapAPIUtil.getPlaceInfo(placeId).then(res => {
//         return props.addFavorite(res.data.result, props.userId)
//     }).catch(err =>
//         console.log(err)
//     )
// }

// function getData(start, end, code) {
//     requestData(start, end, code).then(res => {
//         return 
//     })
// }

// let data = getData(start, end, "NM")
// console.log("out of getData", data)
// data.then(res => {
//     console.log("indataTest", res)
// })

function getCount(start, end, code) {
    requestData(start, end, code).then(res => {
        let count = 0
        res.data.records.forEach(day => {
            count += parseInt(day.cases.dailyconfirmed)
        });
        console.log(count);
    })
}




// async function getCount(start, end, code) {
//     try {
//         const res = await requestData(start, end, code)
//         let count = 0
//         res.data.records.forEach(day => {
//             count += parseInt(day.cases.dailyconfirmed)
//         });
//         return count;
//     } catch (error) {
//         console.log(error)
//     }
// }

//needs to set color based on activeCaseCount
function colors(start, end, code) {
    const count = getCount(start, end, code)
    console.log(count)
    if(count < 6000) {
        return "green"
    } else if (count >= 6000 && count <= 15000) {
        return "orange"
    } 
}

//To get number counts, we need 3 things. The state code, the start date and end date.
//The state code can come from the d.id passed into stateCode function
//The start and end dates will come from the slider.
//For now, can you change the color of each state based on Jan 2021 start and end dates?


const svg = select('svg')
.attr('width', 960)
.attr('height', 1000)


const path = geoPath()
json('https://d3js.org/us-10m.v1.json')
    .then(data => {
        const start = '2021-01-01'
        const end = '2021-01-30'
        const code = "CO"
        const states = feature(data, data.objects.states)
        svg.selectAll('path').data(states.features)
            .enter().append('path')
                .attr('class', 'state')
                .attr('id',(d => stateCodes[d.id]))
                .attr('d', path)
            .attr('fill', (d => console.log("colorMe", colors(start, end, stateCodes[d.id]))))
            .append('title')
                .text((d) => {
                    let code = stateCodes[d.id]
                    // console.log("firstCall", activeCaseCount('2021-01-01', '2021-01-30', code))
                })
        // gives state id as tooltip, need to change to name
    });


