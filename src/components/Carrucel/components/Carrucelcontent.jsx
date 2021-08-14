import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../../styles/PortfolioStyles.css'
import PPT from '../../../styles/imgs/proyectos/PPT.png'
import Pokeapi from '../../../styles/imgs/proyectos/Pokeapi.png'
import Pokeapivideo from '../../../styles/videos/PokeAPI.mp4'
import Trackbus from '../../../styles/imgs/proyectos/Trackbus.png'
import github from '../../../styles/imgs/iconos/iconogithub.png'

const Carrucelcontent = () => {
  return (
    <div className="Carousel-container ">
      <Carousel>
        <Carousel.Item>
          <img className="carousel-img d-block w-100 " src={Pokeapi} />
          <Carousel.Caption>
            <a href="https://github.com/Juan0497/pokeapi">
              <button id="githublink-button" className="btn btn-outline-dark">
                <img id="githublink" src={github} />
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img d-block w-100 " src={PPT} alt={PPT} />

          <Carousel.Caption>
            <a href="https://github.com/Juan0497/PiedraPapelTijera">
              <button id="githublink-button" className="btn btn-outline-dark">
                <img id="githublink" src={github} />
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img d-block w-100" src={Trackbus} alt={Trackbus} />
          <Carousel.Caption>
            <a href="https://github.com/Juan0497/PracticaCSS">
              <button id="githublink-button" className="btn btn-outline-dark">
                <img id="githublink" src={github} />
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrucelcontent
