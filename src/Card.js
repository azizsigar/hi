import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className='card'>
        <img src={props.img} alt='hi'></img>
        <div className='about'>
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardDesc'> {props.desc}</p>
        </div>
      </div>
    </div>
  )
}
