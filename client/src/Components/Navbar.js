import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <button><Link to="/admin" exact>Admin</Link></button>
            <button><Link to="/kitchen">Kitchen</Link></button>
            <button><Link to="/menu" exact>Menu</Link></button>
        </nav>
    );
}

export default Navbar;