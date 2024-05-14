// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  useEffect(() => {
    document.title = "Ashish Kumar"; 
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ak" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
