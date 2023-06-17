import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import NameNumbers from './pages/NameNumbers';
import BirthdateNumbers from './pages/BirthdateNumbers';
import CoupleNumbers from './pages/CoupleNumbers';
import Profile from './pages/Profile';
import Shapes from './components/Shapes';
import IsLogged from './components/IsLogged.js';

window.addEventListener('DOMContentLoaded', function() {
  const parallax = document.querySelector('body');

  function updateParallax() {
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }

  window.addEventListener('scroll', updateParallax);
  updateParallax();
});

function App() {

  return (
    <Router>
      <div className="App">
        <IsLogged />
        <Header />
        <Shapes />
        <Shapes />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/name-numbers" element={<NameNumbers />} />
            <Route path="/birthdate-numbers" element={<BirthdateNumbers />} />
            <Route path="/couple-numbers" element={<CoupleNumbers />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <div className="bottom-overlay"></div>
      </div>
    </Router>
  );
}

export default App;