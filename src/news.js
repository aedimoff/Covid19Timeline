const api_key = require('../config/keys').API_KEY;

export const getNews = (date) => {
     let url = `https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&from=${date}-01&to=${date}-28&country=US&media=True`
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            let articles = data.articles.slice(0, 10)
            articles.forEach(article => {
                //creates list item as container
                let listItem = document.createElement('ul');
                listItem.className = "news-item"

                //creates img and adds image
                let image = document.createElement('img')
                image.className = "news-image"
                image.src = "news_image.jpg"

                //creates h1 tag and inserts text
                let header = document.createElement('h1')
                header.className = "news-header"
                let headertext = document.createTextNode(`${article.title}`)
                header.appendChild(headertext)

                //creates a tag and insterts text 
                let link = document.createElement('a')
                link.className = "news-link"
                let linktext = document.createTextNode(`Read Article`)
                link.title = "Read Article"
                link.href = `${article.link}`
                link.appendChild(linktext)

                //apends header and link to list item
                listItem.appendChild(image)
                listItem.appendChild(header)
                listItem.appendChild(link)

                document.getElementById('news').appendChild(listItem)
            })
        }).catch(error => {
            console.log(error)
        });

    }


