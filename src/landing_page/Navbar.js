import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </div>
            <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
                <li className="menu-item">
                    <Link to="/" onClick={toggleMenu}>
                        <i className="fa fa-home" aria-hidden="true" style={{color:"#fff"}}></i>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/about" onClick={toggleMenu}>
                        <i className="fa fa-user-circle-o" aria-hidden="true" style={{color:"#fff"}}></i>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/portfolio" onClick={toggleMenu}>
                        <i className="fa fa-briefcase" aria-hidden="true" style={{color:"#fff"}}></i>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/contact" onClick={toggleMenu}>
                        <i className="fa fa-comments" aria-hidden="true" style={{color:"#fff"}}></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
