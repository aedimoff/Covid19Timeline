import './stylesheets/application.scss'
import './stylesheets/map.scss'
import './stylesheets/slider.scss'
import {getDates, dateCodes} from './dates'
import { renderMap } from './map'




document.addEventListener('DOMContentLoaded', () => {
    let slider = document.getElementById('range-slider')
    let output = document.getElementById('value')

    output.innerHTML = getDates[slider.value];

    let date = dateCodes[slider.value]
    renderMap(date)

    slider.oninput = function() {
        output.innerHTML = getDates[this.value];
        date = dateCodes[this.value]
        renderMap(date)
    }




})

