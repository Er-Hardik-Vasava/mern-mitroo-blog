import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../components/Card.jsx'
import HeroSection from "../components/HeroSection.jsx"


const Home = () => {
  return (
    <>
    <HeroSection/>
    <Card/>
    <Outlet/>
    </>
  )
}

export default Home
