import React, { useState } from 'react';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import hlogo from "../Containers/Images/hotel-png.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="nav-head">
        <div className="nav-head-logo">
          <img src={hlogo} className='hotel-logo-png' alt="Hotel Logo" />
        </div>

        <div className={`nav-head-items ${showMenu ? "open" : ""}`}>
          <ul> 
            <li><Link to="/" onClick={closeMenu}> HOME</Link></li>
            <li><Link to="/Room" onClick={closeMenu}>ROOMS</Link></li>
            <li><Link to="/dining" onClick={closeMenu}>DINING</Link></li>
            <li><Link to="/activities" onClick={closeMenu}>ACTIVITIES</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT US</Link></li>
            <li><Link to="/about" onClick={closeMenu}>ABOUT US</Link></li>
          </ul>
        </div>

        <button className="menu-toggle-btn" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </>
  );
}

export default Navbar;
