import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/admin" exact>Admin</NavLink></li>
                <li><NavLink to="/queue">Kitchen</NavLink></li>
                <li><NavLink to="/menu" exact>Menu</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;