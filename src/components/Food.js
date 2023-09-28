import React from 'react'
import { useParams } from "react-router-dom";
export default function Food() {
  let params = useParams
  return (
    <div>
      <p> ordered{params.food}</p>
    </div>
  )
}
