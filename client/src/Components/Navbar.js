import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/admin" exact>Admin</Link>
            <Link to="/queue">Kitchen</Link>
            <Link to="/menu" exact>Menu</Link>
        </nav>
    );
}

export default Navbar;