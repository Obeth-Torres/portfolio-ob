import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './pages/experience/Experience';
import Home from './pages/home/Home';
import Proyects from './pages/proyects/Proyects';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='proyects' element={<Proyects/>} />
          <Route path='experience' element={<Experience/>} />
        </Routes>

        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
