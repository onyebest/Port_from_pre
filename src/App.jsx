import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Projects/Project'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 