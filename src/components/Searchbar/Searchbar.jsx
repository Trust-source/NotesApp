import React from 'react'
import './Searchbar.scss'
import Navbar from '../Navbar/Navbar'
import { Search } from 'lucide-react';

function Searchbar() {
  return (
    <div className='Searchbar'>
      <div className="Container"><input type="text" className='Search' placeholder='Search'/><Search className='Icon'/></div>
      <Navbar/>
    </div>
  )
}

export default Searchbar