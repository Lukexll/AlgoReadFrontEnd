import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">AlgoRead</h1>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-button">Entrar</Link>
        <Link to="/cadastro" className="nav-button">Cadastre-se</Link>
      </div>
    </nav>
  );
};

export default Navbar;
