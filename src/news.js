const api_key = require("../config/keys").API_KEY;
import { urls, april20 } from "./covidData";
import { articles } from "./newsArticles"

export const getNews = (date) => {
  const data = articles[date]
  createNewsElements(data)
};

function createNewsElements(data) {
  let articles = [];
  while (articles.length < 10) {
    let i = randomNum(data.length);
    articles.push(data.splice(i, 1));
  }
  articles.flat().forEach((article) => {
    //creates list item as container
    let listItem = document.createElement("ul");
    listItem.className = "news-item";

    //creates img tag and adds image as src
    let image = document.createElement("img");
    let images = urls;

    let idx = randomNum(images.length);
    let src = images.slice(idx, idx +1);
    image.className = "news-image";
    image.src = `${src[0].toString()}.jpg`;

    //creates h1 tag and inserts headline text
    let header = document.createElement("h1");
    header.className = "news-item-header";
    let headertext = document.createTextNode(article.title);
    header.appendChild(headertext);

    //creates h3 tag and inserts publication date
    let pubDate = document.createElement("h4");
    pubDate.className = "news-item-date";
    let date = new Date(article.published_date.split(" ")[0]);
    let dateString = date.toString("MMMM dS, yyyy").split(" 17:00:00")[0];

    let datetext = document.createTextNode(
      "Published: " + dateString.split(" ").slice(1).join(" ")
    );
    pubDate.appendChild(datetext);

    //creates a tag and insterts text
    let link = document.createElement("a");
    link.className = "news-link";
    let linktext = document.createTextNode(`Read Article`);
    link.title = "Read Article";
    link.href = article.link;
    link.appendChild(linktext);

    //appends header and link to list item
    listItem.appendChild(image);
    listItem.appendChild(header);
    listItem.appendChild(pubDate);
    listItem.appendChild(link);

    document.getElementById("news").appendChild(listItem);
  });
}

function randomNum(size) {
  return Math.floor(Math.random() * size);
}




