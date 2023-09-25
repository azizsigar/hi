import React, { useState } from 'react';
import './App.css';

function App() {
  // functions
const [hex, setHex] = useState("#fffff")
function randomHex(){
  const randomHex = '#' + Math.floor(Math.random()*16777721).toString(16)
  setHex(randomHex)
}

  return (
    // htmls
<div className='App' style={{backgroundColor:`${hex}`}}>
  <div className='colorname'> colors</div>
  <h1>{hex}</h1>
<button onClick={randomHex}>random color</button>
<button onClick={()=> navigator.clipboard.writeText(hex)}>copy color</button>
    </div>
  );
}

export default App;
