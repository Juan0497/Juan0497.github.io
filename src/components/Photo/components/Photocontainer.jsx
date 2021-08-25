import React from 'react'
import Photoimg from '../../../styles/imgs/fondo.jpg'
import Animation from './Animation'
import '../../../styles/PortfolioStyles.css'

const Photocontainer = () => {
  return (
    <div>
      <div className="Photocontainer">
        <img className="containerPhoto" src={Photoimg} alt={Photoimg} />
      </div>
      <div className="Animationcontainer">
        <Animation />
      </div>
    </div>
  )
}

export default Photocontainer
