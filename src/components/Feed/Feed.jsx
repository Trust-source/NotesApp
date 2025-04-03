import React from 'react'
import './Feed.scss'
import Port from '../../Assets/Port.jpg'
import { Heart,Repeat2,HeartOff } from 'lucide-react';


function Feed() {
  return (
    <div className='Feed'>
      <div className="Username"><img src={Port} alt="" /><p className='Name'>Trust Femi</p></div>
      <div className="Image"><img src={Port} alt="" /></div>
      <div className="Reaction"><div className="Like"><Heart/>12</div><div className="Share"><Repeat2/>10</div> <div className="Unlike"><HeartOff/>4</div></div>
      <div className="Caption">My First post on the Flexigram Platform</div>
    </div>
  )
}

export default Feed