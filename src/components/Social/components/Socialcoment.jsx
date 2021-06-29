import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/PortfolioStyles.css'

const Socialcoment = () => {
  return (
    <div className="Social-coment">
      <h1 className="Social-coment-title">About me</h1>
      <div className="Social-coment-title-underline rounded-pill"></div>
      <div className="Social-coment-words-container">
        <p className="Social-coment-words">
          Junior Web Developer with experience in different personal projects made with Html, Reactjs, CSS, Js and
          Bootstrap some of them consume an API. Dev.f course of web development completed at the end of december, 2019
          where i learned some skills that I now applied in my projects like Github, Nodejs, create a CRUD and a
          database in mongoDB. Currently im cursing a bachelor's degree in software engineering at Universidad
          Fidelitas.
        </p>
      </div>
    </div>
  )
}

export default Socialcoment
