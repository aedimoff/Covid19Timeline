# Covid-19 Timeline

* * * * *
### [Covid-19 Timeline Live Link](https://cv-19-timeline.herokuapp.com/)

This timeline presents a historical visualization of the Covid-19 pandemic in the USA. User interface provides a color-coded map that changes color by state based on number of active cases at a currently selected time period. Users will be able to move a slider to toggle between dates and watch as map colors change in correlation with geographical statistics. The map will also serve as a record for significant dates in the development of the Covid-19 pandemic and recover by presenting randomized news headlines based on currently selected date.

Overview
-------------------------------------------------------------------------------
Covid-19 Timeline was built with:

* JavaScript
* Node.js
* Express.js
* D3.js

### Features
<img width="800" alt="Screen Shot 2021-09-01 at 1 17 35 PM" src="https://user-images.githubusercontent.com/76131255/131739276-d14ed53d-257b-4b81-933b-ff5d712d83ac.png">

A color-coded map of the USA is displayed using D3.js. Via a slider, users can toggle through dates since the beginning of Covid-19. Data is then retrieved for each state to display total number of new Covid-19 for that month and renders the corresponding color on the map. 

<img width="532" alt="Screen Shot 2021-09-01 at 1 12 42 PM" src="https://user-images.githubusercontent.com/76131255/131738433-5832b661-48ad-4823-b0bd-380fdc81be55.png">


### News Headlines
When slider input is changed, a fetch request is made to a news API is used to retrieve date-filtered news articles. Article headlines are then rendered in a sidebar along with a link to the original source where users can read the entire article. 

<img width="306" alt="Screen Shot 2021-09-01 at 1 25 07 PM" src="https://user-images.githubusercontent.com/76131255/131739986-a288b52d-e5c5-4bb8-9f51-bcdded130616.png">
