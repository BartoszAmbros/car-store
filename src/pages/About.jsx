import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';


function AboutPage() {
    return (
        <div className="about">
            <div className="container">
                <Header />
                <Navbar />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default AboutPage;