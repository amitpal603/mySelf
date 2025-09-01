import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Project from './components/Pages/Project'
import Skill from './components/Pages/Skill'
import Error from './components/Pages/Error'
import Navbar from './components/Header/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/skill' element={<Skill/>}/>
         <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
