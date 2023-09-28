import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
        <Link to='/'>Home Page</Link>
        <Link to='/user/get-all'>Users</Link>
        <Link to='/post/get-all'>Posts</Link>
        {/* <Link to='/order/:food'>Food</Link> */}
        <Link to='/pagination'>post slide</Link>

      header
    </div>
  )
}
