import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/register"}>Register</Link> &nbsp;
        <Link to={"/login"}>login</Link>&nbsp;
        <Link to={"/profile"}>profile</Link>
    </div>
  )
}

export default Layout