import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './components/AuthContext';

function updateParallax() {
  const parallax = document.querySelector('body');
  const scrollPosition = window.scrollY;
  parallax.style.backgroundPositionY = scrollPosition * -0.15 + 'px';
}
window.addEventListener('scroll', updateParallax);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.Fragment>
      <App />
    </React.Fragment>
  </AuthProvider>
);