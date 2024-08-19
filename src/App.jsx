import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Blogs from './pages/blogs/Blogs'
import Startups from './pages/startups/Startups'

const App = () => {
  return (
    <>
      
      <Navbar/> 
      <Home/>
      <Startups/>
      <Blogs/>
    </>
  )
}

export default App
