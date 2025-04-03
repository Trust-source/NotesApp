import React from 'react'
import './Profilebar.scss'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
import Port from '../../Assets/Port.jpg'

function Profilebar() {
  return (
    <div className='Profilebar'>
      <Topbar/>
      <div className="First">
        <img src={Port} alt="" /> 
        <div className="Followers">579 <span>Followers</span></div> 
        <div className="Following">140 <span>Following</span></div>
        </div>
      <div className="Second">
        <div className="Username">Trust Femi</div>
      </div>
      <Navbar/>
      </div>
  )
}

export default Profilebar