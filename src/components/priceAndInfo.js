import React, {useEffect, useState} from "react";
import axios from 'axios';
import {newsToken} from '../../config/token.js';
import 'babel-polyfill';

export default function PriceandInfo() {

    const [news, getNews] = useState([]);

    return (
        <>
            <div id="priceAndInfo">
                Hahaha
            </div>
        </>
    )
}