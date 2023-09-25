import React, { useState } from 'react';
import './App.css';

function App() {
  // functions
const[minVal,setMinVal] =useState()
const[maxVal,setMaxVal] =useState()
const[randomNum,setRandomNum] =useState()
const getRandomNum =()=>{
  setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))
}
  return (
    // htmls
<div>
  hi
  <div>random num <span>{randomNum}</span></div>
  <div>min</div>
  <input type='number' value={minVal} onChange={e => setMinVal(+e.target.value)}></input>
  <div>max</div>
  <input type='number' value={maxVal} onChange={e => setMaxVal(+e.target.value)}></input>
  <button onClick={getRandomNum}>get random num</button>
    </div>
  );
}

export default App;
