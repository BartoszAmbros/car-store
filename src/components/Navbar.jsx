import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/contact">Contact</Link></span>
            <span><Link to="/login">Store Login</Link></span>
        </div>
    );
}

export default Navbar;