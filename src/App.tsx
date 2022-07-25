import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Education from './pages/education/Education';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='education' element={<Education/>} />
          <Route path='projects' element={<Projects/> } />         

        </Routes>

        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
