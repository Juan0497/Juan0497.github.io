import React from "react";
import PPT from "../../../styles/imgs/PPT.png";
import Pokeapi from "../../../styles/imgs/Pokeapi.png";;
import Trackbus from "../../../styles/imgs/Trackbus.png";
import Carousel from 'react-bootstrap/Carousel';
import github from "../../../styles/imgs/Github.png";
import link from "../../../styles/imgs/Iconolink.jpg";
import "../../../styles/PortfolioStyles.css";

const Carrucelcontent = () => {
    return(
        <div className="Carousel-container ">
<Carousel>
  <Carousel.Item>
    <img
      className="carousel-img d-block w-100 "
      src={Pokeapi}
      alt={Pokeapi}
    />
    <Carousel.Caption>
     <a  href="https://github.com/Juan0497/pokeapi"><button id="githublink-button" className="btn"><img id="githublink" src={github}/></button></a>
     <button  id="iconolink-button" className="btn"><img id="iconolink"  src={link}/></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img d-block w-100 "
      src={PPT}
      alt={PPT}
    />

    <Carousel.Caption>
    <button  id="githublink-button" className="btn"><img id="githublink" src={github}/></button>
    <button id="iconolink-button" className="btn"><img id="iconolink" src={link}/></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img d-block w-100"
      src={Trackbus}
      alt={Trackbus}
    />
    <Carousel.Caption>
    <button id="githublink-button" className="btn"><img id="githublink" src={github}/></button>
    <button id="iconolink-button" className="btn"><img id="iconolink" src={link}/></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
}

export default Carrucelcontent;