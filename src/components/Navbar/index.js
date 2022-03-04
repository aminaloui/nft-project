import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
}
  from './NavbarElements';



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();

  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}><h1>NFT</h1></NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='story'
                smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                >Story</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='roadmap'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Roadmap</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='team'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='faq'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >FAQ</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/wallet'> Connect Wallet</NavBtnLink>
            </NavBtn>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar
