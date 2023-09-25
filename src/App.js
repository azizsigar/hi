import React, { useState } from 'react';
import './App.css'
import images from "./img";


function App() {
  // functions
const [seletcedImg, setSelectedImg] = useState(images[0])
  return (
    // htmls
<div>
  hello
  <div>
<img src={seletcedImg} className='selected'></img>
  </div>
  <div>
    <p>click and see bigger</p>
    {images.map((img,index)=>(
      <img key={index} src={img} alt='hi'
      onClick={()=> setSelectedImg(img)}></img>
))}
  </div>
    </div>
  );
}

export default App;
