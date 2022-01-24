import React from 'react';
import './Hero.css';
import { Link} from "react-scroll";

function Hero() {
  return (
    <div className='hero-container hero' id='hero'>
      <img src='main-photo.jpg' alt = 'cover' class = 'main-photo'/>
      <h1>GEORGIA AWAITS</h1>
      <p>What are you waiting for?</p>
        <Link to='places' className='btn'>
          GET STARTED
        </Link>
    </div>
  );
}

export default Hero;