import React from 'react'
import Navbar from '../components/Navbar';
import List from '../components/List';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <Header />
                <Navbar />
                <List />
                <Footer />
            </div>
        </div>
    );
}

export default Home;