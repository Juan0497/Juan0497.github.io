import React from 'react'
import NavbarCVlink from './NavbarCVlink'
import Iconohome from '../../../styles/imgs/iconos/Iconohome.png'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/PortfolioStyles.css'

const Navbarbotons = () => {
  return (
    <div className="Navbar-container fixed-top d-flex justify-content-center flex-row w-sm-20 w-md-50 w-lg-100 w-xl-100">
      <div className="Navbar-botons p-4">
        <a href="#" className="navbar-nav">
          <img className="Iconohome" src={Iconohome} alt={Iconohome} />
        </a>
        <a href="#Carousel" className="navbar-nav p-4">
          Projects
        </a>
        <a href="#Skillset" className="navbar-nav p-4">
          Skill Set
        </a>
        <a href="#Aboutme" className="navbar-nav p-4">
          About me
        </a>
      </div>
      <div className="Navbar-download p-4 ">
        <NavbarCVlink />
      </div>
    </div>
  )
}

export default Navbarbotons
