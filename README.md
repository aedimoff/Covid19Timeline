# PandemicTimeline
### Background

The Pandemic Timeline presents a historical visualization of the Covid-19 pandemic in the USA. User interface provides a color coded map that changes color by state based on number of active cases at a currently selected time period. Users will be able to move a slider to toggle between dates and watch as map colors change in correlation with geographical statistics. The map will also serve as a record for significant dates in the development of the Covid-19 pandemic and recover by presenting randomized news headlines based on currently selected date.

### Functionality & MVP

Users will be able to:

-   [ ] View color coded statistical data based on location
-   [ ] Toggle time period using a slider to change map view
-   [ ] View randomized news headlines in a sidebar
-   [ ] Click news article link to navigate to news article website


### Wireframes

<img width="890" alt="Screen Shot 2021-06-21 at 1 03 12 PM" src="https://user-images.githubusercontent.com/76131255/122822236-a8900100-d292-11eb-9e24-864aaed220ef.png">

### Architecture and Technologies

-   JavaScript for map logic,
-   Express to handle enable backend HTTP requests,
-   Axios to send HTTP requests to get statistical data
-   D3 to display map

### Implementation Timeline

**Day 1**: Setup project skeleton and entry file. Research D3 to enable map rendering.

**Day 2**: Research and implement APIs to retrieve statistical data.

**Day 3**: Implement backend logic to retrieve data from APIs via HTTP requests. Build frontend logic to render data on map.

**Day 4**: Create slider to toggle various map views. Create sidebar to display news headlines.

**Day 5**: Complete any unfinished MVP's. Clean up styling and CSS. 

### Bonus features

-   [ ] Hover over state produces tooltip containing additional statistical information.
-   [ ] News headlines contain clickable links that navigate to original source.
