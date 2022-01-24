import React, { useState } from 'react';
import {Link} from "react-scroll";
import './Navbar.css';
import SignUp from './SignUp';


function Navbar() {
  const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const setModalOpentrue = () => setModalOpen(true);
  const setModalOpenfalse = () => setModalOpen(false);
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='hero' className='navbar-logo' onClick={closeMobileMenu}>
            <i class="fas fa-map-marked-alt"></i>
            TTG
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div id = 'nav-ul'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='hero' onClick={closeMobileMenu} className='nav-links'>
                    Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='places' onClick={closeMobileMenu} className='nav-links'>
                    Places
                </Link>
              </li>
              <li className='nav-item'>
                <Link  to='footer' onClick={closeMobileMenu} className='nav-links'>
                    About Us
                </Link>
              </li>
              <li className='nav-item' id = 'nav-button'>
                <Link onClick = {() => {setModalOpentrue() ; closeMobileMenu()}} className='nav-links'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>  
        </div>
        {modalOpen && <SignUp closeModal={setModalOpenfalse}/>}
      </nav>
    </>
  );
}

export default Navbar;