import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carruceltitle from '../components/Carrucel/Carruceltitle'
import Carrucel from '../components/Carrucel/Carrucel'
import Skillsettitle from '../components/Skillset/Skillsettitle'
import Skillset from '../components/Skillset/Skillset'
import Social from '../components/Social/Social'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/PortfolioStyles.css'

const App = () => {
  return (
    <div className="App-container">
      <Navbar />
      <div className="App-hero d-flex justify-content-center"></div>
      <Carruceltitle />
      <Carrucel />
      <Skillsettitle />
      <Skillset />
      <div className="App-footer ">
        <Social />
      </div>
    </div>
  )
}

export default App

/** <img className="App-img" id="Home" src={} alt={} /> */
