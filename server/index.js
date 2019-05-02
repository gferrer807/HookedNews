const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');
const {getTickers} = require('./models/getTickers.js')

const app = express();

app.use(cors());
app.use(parser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../dist/index.html'))
})

app.get('/bundle', (req, res) => {
    res.sendFile(path.join(__dirname+'/../dist/bundle.js'))
})

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/../dist/styles.css'))
})

app.get('/tickers', (req, res) => {
    getTickers(req, res);
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})