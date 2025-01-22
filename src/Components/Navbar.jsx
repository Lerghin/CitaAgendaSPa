import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Navbar.css";
import { FaCalendar, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ubicación actual

  const toggleMenu = () => {
    console.log("Menú hamburguesa clickeado", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span className="span">Spa-Ler</span>
      </div>

      
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a 
            onClick={() => navigate('/')} 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
         <FaHome />   Home 
          </a>
        </li>
        <li>
          <a 
            onClick={() => navigate('/date')} 
            className={`navbar-link ${isActive('/date') ? 'active' : ''}`}
          >
          <FaCalendar />  Agendar Citas 
          </a>
        </li>
        <li>
          <button className="logout-button">Salir</button>
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;