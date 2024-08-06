import { useState } from 'react'
import Navbarpage from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import { context } from './components/context/context'
import Contact from './components/Contact';
import About from './components/About'
import Service from './components/Service';
import Service2 from './components/Service2';
import HomeCard from './components/HomeCard';


function App() {

  let [theme,setTheme]=useState('')
  let funTheme=(data)=>{
    setTheme(data) 
    console.log(data)
  }
  

  const [count, setCount] = useState(0)
  let router=createBrowserRouter(
    (createRoutesFromElements(
      <Route path='/' element={<Layout them={funTheme}/>}>
        <Route path='' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/services' element={<Service2/>} />
        <Route path='/multiple-services' element={<HomeCard/>} />
      </Route>
    ))
  )

  return (
    <>
     <context.Provider value={{theme}}>
       <RouterProvider router={router}/>
       {/* <div>hi</div> */}
       </context.Provider>
    </>
  )
}

export default App
