import React, {useEffect, useState} from "react";
import axios from 'axios';
import 'babel-polyfill';
import {sample} from '../sampleData/sample.js'

export default function Marquee() {

  const [results, setResults] = useState(sample);

  useEffect(async () => {
    const result = await axios(
      '/tickers',
    );
    console.log(`This is the result : ${result.data}`)
    if (result.data !== null) {
      return setResults(result.data);
    } else {
      console.log(sample)
      return setResults(sample);
    }
  }, []);

  function modifyPrice(close) {
    close = (Math.round(100*close)/100);
    return close;
  }

  function calculateChange(open, close) {
    if (open > close) {
      var change = close/open;
      return (<span id="loss"><strong>&#9660;</strong>{(Math.round(100*change)/100)}%</span>)
    } else {
      var change = open/close;
      return (<span id="gain"><strong>&#9650;</strong>{(Math.round(100*change)/100)}%</span>)
    }
  }

  //pass in second argument to mutate behavior
  return (
    <>
      <marquee width="100%" id="marquee">
        {
          results.map((results, key) => {
          return (
          <span>
            {results.title} : {modifyPrice(results.close)} {calculateChange(results.open, results.close)}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </span>
          )
          })
        }
      </marquee>
    </>
  )
}