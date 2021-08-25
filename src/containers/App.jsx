import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Photo from "../components/Photo/Photo"
import Carrucel from '../components/Carrucel/Carrucel'
import Skillset from '../components/Skillset/Skillset'
import Social from '../components/Social/Social'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/PortfolioStyles.css'

const App = () => {
  return (
    <div className="App-container w-md-50 w-lg-100 w-xl-100">
      <Navbar />
      <div className="App-hero d-flex justify-content-center"></div>
      <Photo />
      <Carrucel />
      <Skillset />
      <div className="App-footer ">
        <Social />
      </div>
    </div>
  )
}

export default App

