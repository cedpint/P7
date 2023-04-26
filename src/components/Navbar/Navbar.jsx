import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from '../../assets/logo.png';

function Navbar() {
  return <nav className="navbar">
    <div className="navbar_logo">
        <img src={logo} alt="Logo de Kasa"/>
    </div>
    <div className="navbar_elements">
        <Link to="/">
          <div>Accueil</div>
        </Link>
        <Link to="/about">
          <div>A propos</div>
        </Link>
    </div>
  </nav>;
}

export default Navbar