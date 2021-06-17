import React from "react";
import footer from "../../../styles/imgs/footer.jpg";
import hero from "../../../styles/imgs/hero.jpg";
import try2 from "../../../styles/imgs/try2.jpg";
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
      src={try2}
      alt={try2}
    />
    <Carousel.Caption>
     <a  href="https://github.com/Juan0497/pokeapi"><button id="githublink-button" className="btn"><img id="githublink" src={github}/></button></a>
     <button  id="iconolink-button" className="btn"><img id="iconolink"  src={link}/></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img d-block w-100 "
      src={hero}
      alt={hero}
    />

    <Carousel.Caption>
    <button  id="githublink-button" className="btn"><img id="githublink" src={github}/></button>
    <button id="iconolink-button" className="btn"><img id="iconolink" src={link}/></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img d-block w-100"
      src={footer}
      alt={footer}
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