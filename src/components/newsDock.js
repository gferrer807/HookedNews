import React, {useEffect, useState} from "react";
import axios from 'axios';
import {newsToken} from '../../config/token.js';
import 'babel-polyfill';

export default function News() {

    const [news, getNews] = useState([]);

    useEffect(async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-05&sortBy=publishedAt&apiKey=${newsToken}`)
        .then(res => {
          //console.log(res.data)
          getNews(res.data.articles);
        })
      }, []);

    return (
        <>
            <div id="newsFeed">
                <ul>
                    {news.map((items) => {
                        return (
                            <li>
                                <strong><a href={items.url}>{items.title}</a></strong>
                                <p id="description">{items.description}</p>
                                <p id="newsDate">{items.publishedAt}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}