import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Main from '../../components/Main.jsx'
import Footer from '../../components/Footer.jsx'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default Home
