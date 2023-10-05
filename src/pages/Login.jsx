import React from 'react'
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer';

function LoginPage() {
    return (
        <div className="login">
            <div className="container">
                <Navbar />
                <Login />
                <Footer />
            </div>

        </div>
    );
}

export default LoginPage;