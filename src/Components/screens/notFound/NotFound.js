import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='PageNotFound'>
      <h1>This page dosnt found go to<Link to='/' className='PageNotFoundTagA'>Home Page</Link></h1>
    </div>
  )
}

export default NotFound