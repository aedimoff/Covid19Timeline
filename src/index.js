import './stylesheets/reset.scss'
import './stylesheets/application.scss'
import './stylesheets/map.scss'
import './stylesheets/slider.scss'
import axios from 'axios'
import { select, json, geoPath, tsv } from 'd3';

import {getDates, dateCodes} from './dates'
import { renderMap } from './map'




document.addEventListener('DOMContentLoaded', () => {

    let slider = document.getElementById('range-slider')
    let output = document.getElementById('value')


    output.innerHTML = getDates[1]

    slider.oninput = function() {
        output.innerHTML = getDates[this.value];
    }
//     const requestNews = () => {   
//     return new Promise((resolve, reject) => {
//         axios.request({
//             method: 'GET',
//             url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
//             params: {
//                 q: 'covid',
//                 lang: 'en',
//                 from: '2020/05/01',
//                 to: '2020/05/31',
//                 sort_by: 'relevancy',
//                 sources: 'nytimes.com, cnn.com, forbes.com, usnews.com, abcnews.go.com, wsj.com, cbsnews.com, washingtonpost.com, time.com, newyorker.com, foxnews.com, bbc.com, theglobeandmail.com',
//                 search_in: "title",
//                 country: 'US',
//                 media: 'True',
//                 topic: "news"
//             },
//             headers: {
//                 'x-rapidapi-key': api_key,
//                 'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
//             }
//         }).then(response => {
//             resolve(response.data)
//         })
//             .catch(error => {
//                 console.error('auth.error', error);
//                 reject(error)
//             });
//     });
// };



// requestNews().then(res => {console.log(res.articles)})


})

