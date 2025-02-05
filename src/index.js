import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './landing_page/home/Homepage';
import PortfolioPage from './landing_page/portfolio/PortfolioPage';
import AboutPage from './landing_page/about/AboutPage';
import ContactPage from './landing_page/contact/ContactPage';
import Navbar from './landing_page/Navbar';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar on all pages except the Homepage */}
      {location.pathname !== '/' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
