import './stylesheets/reset.scss'
import './stylesheets/application.scss'
import './stylesheets/map.scss'
import './stylesheets/slider.scss'
const api_key = require('../config/keys').API_KEY;
import {getDates} from './dates'
import { renderMap } from './map'




document.addEventListener('DOMContentLoaded', () => {

    let slider = document.getElementById('range-slider')
    let output = document.getElementById('value')


    output.innerHTML = getDates[1]

    slider.oninput = function() {
        output.innerHTML = getDates[this.value];
    }
 const getNews = () => {
        fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&from=2020-05-01&to=2020-05-31&country=US&media=True", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            let articles = data.articles.slice(0, 5)
            articles.forEach(article => {
                //creates list item as container
                let listItem = document.createElement('ul');
                listItem.className = "news-item"

                //creates h1 tag and inserts text
                let header = document.createElement('h1')
                header.className = "news-header"
                let headertext = document.createTextNode(`${article.title}`)
                header.appendChild(headertext)

                //creates a tag and insterts text 
                let link = document.createElement('a')
                link.className = "news-link"
                let linktext = document.createTextNode(`${article.link}`)
                link.title = "Read Article"
                link.appendChild(linktext)

                //apends header and link to list item
                listItem.appendChild(header)
                listItem.appendChild(link)

                document.getElementById('news').appendChild(listItem)
            })
            console.log(articles)
        }).catch(error => {
            console.log(error)
        });

    }

    getNews()


})

