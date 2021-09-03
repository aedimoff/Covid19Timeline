// const api_key = require("../config/keys").API_KEY;
// import { urls, april20 } from "./covidData";

// export const getNews = (date) => {
//   if (date === "2020-04") {
//     return createNewsElements(april20);
//   }
//   let url = `https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&from=${date}-01&to=${date}-28&country=US&media=True`;

//   fetch(url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": api_key,
//       "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
//     },
//   })
//     .then((response) => {
//       console.log(response.json());
//       return response.json();
//     })
//     .then((data) => {
//       createNewsElements(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// function createNewsElements(data) {
//   console.log(data.articles);
//   let articles = [];
//   while (articles.length < 10) {
//     let i = randomNum(data.articles.length);
//     articles.push(data.articles.splice(i, 1));
//   }
//   articles.flat().forEach((article) => {
//     //creates list item as container
//     let listItem = document.createElement("ul");
//     listItem.className = "news-item";

//     //creates img and adds image
//     let image = document.createElement("img");
//     let images = urls;
//     let idx = randomNum(images.length);
//     let src = images.splice(idx, 1);
//     image.className = "news-image";
//     image.src = `${src[0].toString()}.jpg`;

//     //creates h1 tag and inserts headline text
//     let header = document.createElement("h1");
//     header.className = "news-item-header";
//     let headertext = document.createTextNode(article.title);
//     header.appendChild(headertext);

//     //creates h3 tag and inserts publication date
//     let pubDate = document.createElement("h4");
//     pubDate.className = "news-item-date";
//     let date = new Date(article.published_date.split(" ")[0]);
//     let dateString = date.toString("MMMM dS, yyyy").split(" 17:00:00")[0];

//     let datetext = document.createTextNode(
//       "Published: " + dateString.split(" ").slice(1).join(" ")
//     );
//     pubDate.appendChild(datetext);

//     //creates a tag and insterts text
//     let link = document.createElement("a");
//     link.className = "news-link";
//     let linktext = document.createTextNode(`Read Article`);
//     link.title = "Read Article";
//     link.href = article.link;
//     link.appendChild(linktext);

//     //appends header and link to list item
//     listItem.appendChild(image);
//     listItem.appendChild(header);
//     listItem.appendChild(pubDate);
//     listItem.appendChild(link);

//     document.getElementById("news").appendChild(listItem);
//   });
// }

// function randomNum(size) {
//   return Math.floor(Math.random() * size);
// }
