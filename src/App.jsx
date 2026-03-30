import './App.css'
import './index.css'
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Layout/Navbar'
import { Routes , Route } from 'react-router-dom'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
function App() {
  return (
    <main className='bg-[#0D0C1D] min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </main>
  )
}

export default App
