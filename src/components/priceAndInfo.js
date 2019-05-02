import React, {useEffect, useState} from "react";
import axios from 'axios';
import {newsToken} from '../../config/token.js';
import 'babel-polyfill';

export default function PriceandInfo() {

    const [news, getNews] = useState([]);

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