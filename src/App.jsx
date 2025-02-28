import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import SEO from './components/SEO';
import './index.css';

function App() {
    return (
        <div>
            <SEO />
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
