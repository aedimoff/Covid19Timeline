const express = require('express');
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 5000;

app.unsubscribe(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.get('/')

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})