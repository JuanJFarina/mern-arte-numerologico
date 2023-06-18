import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Shapes from './components/Shapes';
import IsLogged from './components/IsLogged.js';
import Home from './pages/Home';
import NameNumbers from './pages/NameNumbers';
import BirthdateNumbers from './pages/BirthdateNumbers';
import CoupleNumbers from './pages/CoupleNumbers';
import Profile from './pages/Profile';

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