import React, {useEffect, useState} from "react";
import axios from 'axios';
import TradingViewWidget from 'react-tradingview-widget';
import 'babel-polyfill';

export default function Chart() {
        return (
            <>
            <div id="tradingview-widget-container">
                <TradingViewWidget
                    symbol="NASDAQ:AAPL"
                    locale="fr"
                    height="600"
                    width="700"
                    interval="D"
                    theme="Dark"
                    locale="en"
                    study="IchimokuCloud@tv-basicstudies"
                />
            </div>
            </>
        );
}