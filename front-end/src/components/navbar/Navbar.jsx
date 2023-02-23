import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="parking__navbar">
      <div className="parking__navbar-links">
        <div className="parking__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><a href="#parking">Find Parking</a></p>
          <p><a href="#possibility">How It Works</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={() => {
          navigate('/login')
        }}>Sign in</p>
        <button type="button" onClick={() => {
          navigate('/signup')
        }}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
