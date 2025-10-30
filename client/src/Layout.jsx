import { Link, Outlet } from "react-router";

import React from 'react'

const Layout = () => {
  return (
    <div>
        <Link to='insert'>Insert</Link>  |
        <Link to='display'>Display</Link>|
        <Link to='search'>Search</Link>|

        <hr />
        <Outlet/>


    </div>
  )
}

export default Layout