import React from 'react'
import NavbarCVlink from './NavbarCVlink'
import Iconohome from '../../../styles/imgs/Iconohome.png'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/PortfolioStyles.css'

const Navbarbotons = () => {
  return (
    <div className="Navbar-container fixed-top d-flex flex-row w-sm-20 w-md-50 w-lg-100 w-xl-100">
      <div className="Navbar-botons p-4  ">
        <a href="#Home" className="navbar-nav">
          <img className="Iconohome" src={Iconohome} alt={Iconohome} />
        </a>
        <a href="#Projects" className="navbar-nav">
          Projects
        </a>
        <a href="#Skillset" className="navbar-nav">
          Skill Set
        </a>
        <a href="#Aboutme" className="navbar-nav">
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
