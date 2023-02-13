import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo.svg";
import { ArrowRightCircle, Quote } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'react-lottie';
import * as animationData from "../assets/img/computer-guy-1.json";
import footerRect from "../assets/img/footerRect.svg";
import AnimationPage from './AnimationPage';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Node Runner", "Crypto Enthusiast" ];
  const period = 2000;
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                <span className="tagline">{date}</span>
                <h1>{`Hi! I'm Aryan`} &#128512;</h1>
                  <h4>Software Developer, Creative and Music Lover!</h4>
                  <br></br>
                  <i><q>BSc in Computer Engineering at University of Alberta. Graduating may 2023. Here I will list my personal/school projects outside of professional work.</q></i>
              {/* </div>}
            </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                  <AnimationPage/>
                {/* </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
        <section className="testnet" id="testnet">
      Projects
      <br></br>
      <br></br>
      <div class="project_panel">MRI spinal transducer (under development. 2023)
      <hr></hr>
      <div class="panel_text">&#x2022; Final year capstone project</div>
      <div class="panel_text">&#x2022; Developing a transducer device to stimulate patient spines for MRI data collection. Device operation is controlled through a web application.</div>
      <div class="panel_text">&#x2022; technologies: Raspberry pi, steppermotor, motor drivers, node.js</div>
      </div>
      <br></br>
      <div class="project_panel">Rocket App (2021)
      <hr></hr>
      <div class="panel_text">&#x2022; Android App with multi user functionality and a firebase database</div>
      <div class="panel_text">&#x2022; Developed within a team of students and took lead on the UI/UX development</div>
      <div class="panel_text">&#x2022; technologies: Android Studio, java, firebase</div>
      <div class="panel_text">&#x2022; github repo: <a href="https://github.com/SiAryan/RocketApp">https://github.com/SiAryan/RocketApp</a></div>
      </div>      
      <br></br>
      <div class="project_panel">Badminton Bot (2020)
      <hr></hr>
      <div class="panel_text">&#x2022; Hackathon project made with colleagues at University of Alberta</div>
      <div class="panel_text">&#x2022; Robot that autonomously positions itself on a Badminton court for target practice</div>
      <div class="panel_text">&#x2022; Hits on the robot target are recorded and displayed on a related android application</div>
      <div class="panel_text">&#x2022; technologies: Arduino, c++, Android studio, java</div>
      <div class="panel_text">&#x2022; github repo: <a href="https://github.com/SiAryan/BadmintonBot">https://github.com/SiAryan/BadmintonBot</a></div>
      </div>
      <br></br>
      <div class="project_panel">To The Wormhole (2018)
      <hr></hr>
      <div class="panel_text">&#x2022; A pygame project made during the summer after my first year of computer engineering</div>
      <div class="panel_text">&#x2022; Space flight game with the objective to achieve a high score by blasting the alient monsters with your spaceship</div>
      <div class="panel_text">&#x2022; technologies: python, pygame</div>
      <div class="panel_text">&#x2022; github repo: <a href="https://github.com/SiAryan/To-The-Wormhole">https://github.com/SiAryan/To-The-Wormhole</a></div>
      </div>
      
       
        {/* </div> */}
        
        
        
    </section>
      </Container>
    </section>
  )
}
