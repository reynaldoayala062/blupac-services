import React, { useState, useEffect } from 'react'
import{FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img, NavBtn, NavBtnCall } from './NavbarElements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Img src={require('../../images/Clearwater transport logo png.png')} alt=""/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars color="black"/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Home </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> About Us </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='jobs' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Jobs </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Contact </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
