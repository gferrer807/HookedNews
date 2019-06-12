import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import Marquee from './components/marquee.js';
import Chart from './components/chart.js';
import News from './components/newsDock';
import PriceandInfo from './components/priceAndInfo'
import axios from 'axios';
import 'babel-polyfill';

export default function App() {
  //pass in second argument to mutate behavior
  return (
    <>
      <div className="parent">
        <Marquee />
        <Chart/>
        <PriceandInfo />
        <News/>
      </div>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));