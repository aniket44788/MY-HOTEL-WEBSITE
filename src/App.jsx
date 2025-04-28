import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Navbar/Nav-Contents/Home/Home';
import Room from './Components/Navbar/Nav-Contents/Room/Room';
import Dining from "./Components/Navbar/Nav-Contents/Dining/Dining";
import Contact from "./Components/Navbar/Nav-Contents/Contact/Contact";
import About from "./Components/Navbar/Nav-Contents/About/About"
import Activities from "./Components/Navbar/Nav-Contents/Activities/Activities"
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Room" element={<Room/>} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App