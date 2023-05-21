import React from 'react'
import NavBar from './nav/NavBar'
import MainBlock from './mainBlock/MainBlock'
import Directions from './directions/Directions'
import PopularCourses from './popularCourses/PopularCourses'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <MainBlock/>
      <Directions/>
      <PopularCourses/>
      <Footer/>
    </div>
  )
}

export default Home