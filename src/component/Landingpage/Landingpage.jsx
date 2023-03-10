import React from 'react'
import Getstart from './Getstart'
import Navbar from './Navbar'
import Experience from './Experience'
import Blogs from './Blogs'
import Clients from './Clients'
import Downloadapp from './Downloadapp'
import Footer from './Footer'

const Landingpage = () => {
  return (
    <div>
        <Navbar/>
        <Getstart/>
        <Experience/>
        <Blogs />
        <Clients />
        <Downloadapp />
        <Footer /> 
        
    </div>
  )
}

export default Landingpage