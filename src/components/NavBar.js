import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import navIcon1 from '../assets/img/twitter.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import navIcon4 from '../assets/img/linkedin.svg';
import navIcon5 from '../assets/img/email.svg';
import { useHistory, Link } from 'react-router-dom';
import styled  from "styled-components";
import { Banner } from './Banner';
import { PHistory } from './Phistory';

// export const Testnet = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
// }

const LinkStyled = styled(Link)`
font-weight: 700;
color: #fff;
padding: 18px 34px;
font-size: 18px;
margin-left: 18px;
position: relative;
background-color: transparent;
transition: 0.3s ease-in-out;
`;

export const NavBar = () => {
  const [content, setContent] = useState(() => Banner)

  function handleClick() {
    console.log("handling click")
    setContent(() => Banner)
  }
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>  */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> 
              <Nav.Link href="https://stake.nodex.codes" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Stake</Nav.Link>
              <Nav.Link href="https://explorer.nodex.codes" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Explorer</Nav.Link>              
              <Nav.Link href="https://jumper.nodex.codes" target="_blank" className={activeLink === 'jumper' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Jumper</Nav.Link>                            
              <Nav.Link href="#testnet" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Testnet</Nav.Link>
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link> */}
              {/* <Nav.Link to="/" target="_blank" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/professionalHistory')}>Professional history</Nav.Link>
              <Nav.Link href="" target="_blank" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("/About")}>About me</Nav.Link>
               */}
              {/* {/* <Nav.Link href="/portfolio" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} >Home</Nav.Link> */}
              <LinkStyled to="/" >Home</LinkStyled> 
              <LinkStyled to="/portfolio/professionalHistory" >Professional History </LinkStyled> 
            
            </Nav>
            
            <div className='spacer'> <span className="navbar-text">
              <div className="social-icon">
                
                <a href="https://github.com/SiAryan"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/aryan-enguofa/" target="_blank"><img src={navIcon4} alt="LinkedIn" /></a>
                <a href="mailto: asingh2@ualberta.ca" target="_blank"><img src={navIcon5} alt="LinkedIn" /></a>
                
                </div>
                </span>    </div>
            
            
              
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}
