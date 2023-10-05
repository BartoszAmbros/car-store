import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/login">Store Login</Link></p>

                <span>Created by Bartosz Ambros</span>
            </div>
        </div>
    );
}

export default Footer;