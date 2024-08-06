import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
// import Footer from './Footer'
function Layout(prop) {
  let [data,setData]=useState('')
 
  let getTheme=(data1)=>{
      setData(data1)
      console.log(data1)
      prop.them(data1)
  }

  return (
   <>
   <Navbar get={getTheme}/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout