import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div className="contact">
            <div className="container">
                <Header />
                <Navbar />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default ContactPage;