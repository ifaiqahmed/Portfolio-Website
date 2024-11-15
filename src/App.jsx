import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-3 sm:mx-[7%]' >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/techstack' element={<TechStack/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
