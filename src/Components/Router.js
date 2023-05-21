import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import NotFound from './screens/notFound/NotFound'
import Courses from './screens/courses/Courses'
import Lections from './screens/lections/Lections'
import Teachers from './screens/teachers/Teachers'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Courses/>} path='/courses'/>
            <Route element={<Lections/>} path='/lections'/>
            <Route element={<Teachers/>} path='/teachers'/>
            
            <Route element={<NotFound/>} path='*'/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router