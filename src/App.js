import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Places from './components/Places';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Places />
        <Footer />
    </>
  );
}

export default App;
