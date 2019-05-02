const axios = require('axios');
const tickers = require('../assets/tickers.json');
const {token} = require('../../config/token.js')

module.exports = {
    getTickers: (req, res) => {
        let arr = [];
          Promise.all(tickers.map((item) => {
            return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=daily&symbol=${item[0]}&apikey=${token}`)
            .then((data) => {
              item[0] = {
                title: item[0],
                close: data.data["Time Series (Daily)"]["2019-04-05"]["4. close"],
                open: data.data["Time Series (Daily)"]["2019-04-05"]["1. open"]
              }
              arr.push(item[0]);
            })
            .catch((err) => {
              console.log(err);
            });
          }))
          .then((data) => {
            res.send(arr)
          })
        }
}