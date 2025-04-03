import React from 'react'
import './Homepage.scss'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
import Feed from '../Feed/Feed'


 
function Homepage() {
  return (
    <div className='Homepage'>
    <Topbar/>
    <div className="Container">
    <Feed/>
    <Feed/>
    <Feed/>
    </div>
    <Navbar/>
    </div>
  )
}

export default Homepage