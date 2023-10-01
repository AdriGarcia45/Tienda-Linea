// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/Carrito.html">Carrito</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
