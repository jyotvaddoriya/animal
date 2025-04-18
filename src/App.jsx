import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Reptiles from './pages/Reptiles'
import Snakes from './pages/Snakes'
import Landanimal from './pages/Landanimal'

const App = () => {
  return (
<Router>
  <Navbar/>
  <Routes>
 
  <Route path="/" element={<Home />} />
  <Route path="/reptiles" element={<Reptiles />} />
  <Route path="/snakes" element={<Snakes />} />
  <Route path="/land" element={<Landanimal />} />
  </Routes>
</Router>
  )
}

export default App
