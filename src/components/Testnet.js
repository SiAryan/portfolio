import React from 'react';
import meter1 from "../assets/img/tidefi.png";
import meter2 from "../assets/img/sei.png";
import meter3 from "../assets/img/stride.png";
import meter4 from "../assets/img/teritori.png";
import meter5 from "../assets/img/uptick.png";
import meter6 from "../assets/img/subquery.png";
import meter8 from "../assets/img/bundlr.svg";
import meter9 from "../assets/img/aptos.png";
import meter10 from "../assets/img/defund.png";
import meter11 from "../assets/img/deweb.png";
import meter12 from "../assets/img/celestia.png";
import meter13 from "../assets/img/masa.png";
import meter14 from "../assets/img/paloma.png";
import meter15 from "../assets/img/forta.png";
import meter16 from "../assets/img/sui.png";
import meter17 from "../assets/img/peaq.png";
import meter18 from "../assets/img/juno.png";
import meter19 from "../assets/img/rebus.png";
import meter20 from "../assets/img/icw.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import footerRect from "../assets/img/footerRect.svg";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
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

  return (
    <section className="testnet" id="testnet">
      Projects
      <br></br>
      <br></br>
      <div class="project_panel">
      MRI spinal transducer
      <div class="panel_text">Developing a transducer device to stimulate patient spines for MRI data collection. Device operation is controlled through web application built from NodeRED(nodejs)</div>
      </div>
      {/* <br></br>
      <div class="project_panel">Rocket App</div>
      <br></br>
      <div class="project_panel">Badminton Bot</div>
      <br></br>
      <div class="project_panel">To The Wormhole</div> */}
      
       
        {/* </div> */}
        <img className="background-image" src={footerRect} alt="Image" />
        
        
    </section>
  )
  
}
