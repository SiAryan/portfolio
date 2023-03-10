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


export const PHistory = () => {
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

      <section className="testnet" id="testnet">
      Professional History
      <br></br>
      <br></br>
      <div class="project_panel">Tetra Tech (May 2021 - December 2021)
      <hr></hr>
      <div class="panel_text">&#x2022; Developed web based applications that visualized roadway survey data. Web applications displayed LiDAR point clouds and panoramic images on a 3D viewing space.</div>
      <div class="panel_text">&#x2022; Used Python, SQL, Javascript, HTML and CSS during development. Learnt about site Routing, Front end development, Back end I/O, API implementation and debugging.</div>
      <div class="panel_text">&#x2022; Prepared data sets and trained deep learning models in Tensorflow(python) that would label road signs, guard rails and other features on survey images.</div>
      </div>
      <br></br>
      <div class="project_panel">Alberta Health Services (January 2020 - August 2020)
      <hr></hr>
      <div class="panel_text">&#x2022; Created SQL databases for tracking Covid-19 pandemic supplies within several hospital inventories spread out over the province.</div>
      <div class="panel_text">&#x2022; Prepared reports and spreadsheets for purchase orders and deliveries of medical supplies, food rations etc.</div>
      <div class="panel_text">&#x2022; Prepared visual dashboards to predict shortages based on demand and plan future contracts from vendors.</div>
      <div class="panel_text">&#x2022; Automated report generation from databases and updates to the database from new purchase/delivery reports through python scripts.</div>
      </div>
      
       
        {/* </div> */}
        
        
        
    </section>
      </Container>
    </section>
  )
}
