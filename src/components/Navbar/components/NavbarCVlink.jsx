import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/PortfolioStyles.css'

const NavbarCVlink = () => {
  return (
    <div className="NavbarCVlink-boton">
      <Link to="/curriculumvitae">
        <a className="navbar-nav">CV</a>
      </Link>
    </div>
  )
}

export default NavbarCVlink
