import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import navIcon4 from '../assets/img/linkedin.svg';
import headerImg from "../assets/img/header-img.svg";
import navIcon5 from '../assets/img/email.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                {/* <a href="https://discordapp.com/users/928575843641479198" target="_blank"><img src={navIcon3} alt="Discord" /></a> */}
                <a href="https://github.com/SiAryan"target="_blank"><img src={navIcon2} alt="Github" /></a>
                {/* <a href="https://twitter.com/nodexploit" target="_blank"><img src={navIcon1} alt="Twitter" /></a> */}
                <a href="https://www.linkedin.com/in/aryan-enguofa/" target="_blank"><img src={navIcon4} alt="LinkedIn" /></a>
                <a href="mailto: asingh2@ualberta.ca" target="_blank"><img src={navIcon5} alt="LinkedIn" /></a>
                </div>
            <p>Made by Aryan Singh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
