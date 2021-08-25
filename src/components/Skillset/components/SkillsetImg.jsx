import React from 'react'
import '../../../styles/PortfolioStyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import logohtml from '../../../styles/imgs/logos/logohtml.png'
import logocss from '../../../styles/imgs/logos/logocss.png'
import logojavascript from '../../../styles/imgs/logos/logojavascript.png'
import logoreactjs from '../../../styles/imgs/logos/logoreactjs.svg'
import logogithub from '../../../styles/imgs/logos/logogithub.svg'
import logobootstrap from '../../../styles/imgs/logos/logobootstrap.svg'
import logobabel from '../../../styles/imgs/logos/logobabel.svg'
import logowebpack from '../../../styles/imgs/logos/logowebpack.svg'
import logonodejs from '../../../styles/imgs/logos/logonodejs.svg'
import logogsap from '../../../styles/imgs/logos/logogsap.svg'
import logosql from '../../../styles/imgs/logos/logosql.png'
import logoes6 from '../../../styles/imgs/logos/logoes6.svg'

const SkillsetImg = () => {
  return (
    <div className="SkillsetImg-container">
      <div className="SkillsetImg-html-container">
        <img className="SkillsetImg-html" src={logohtml} alt={logohtml} />
        <div className="SkillsetImg-html-underline rounded-pill"></div>
        <h2 className="SkillsetImg-html-name">Html5</h2>
      </div>
      <div className="SkillsetImg-css-container">
        <img className="SkillsetImg-css" src={logocss} alt={logocss} />
        <div className="SkillsetImg-css-underline rounded-pill"></div>
        <h2 className="SkillsetImg-css-name">CSS3</h2>
      </div>
      <div className="SkillsetImg-js-container">
        <img className="SkillsetImg-js" src={logojavascript} alt={logojavascript} />
        <div className="SkillsetImg-js-underline rounded-pill"></div>
        <h2 className="SkillsetImg-js-name">JavaScript</h2>
      </div>
      <div className="SkillsetImg-reactjs-container">
        <img className="SkillsetImg-reactjs" src={logoreactjs} alt={logoreactjs} />
        <div className="SkillsetImg-reactjs-underline rounded-pill"></div>
        <h2 className="SkillsetImg-reactjs-name">Reactjs</h2>
      </div>
      <div className="SkillsetImg-github-container">
        <img className="SkillsetImg-github" src={logogithub} alt={logogithub} />
        <div className="SkillsetImg-github-underline rounded-pill"></div>
        <h2 className="SkillsetImg-github-name">Github</h2>
      </div>
      <div className="SkillsetImg-bootstrap-container">
        <img className="SkillsetImg-bootstrap" src={logobootstrap} alt={logobootstrap} />
        <div className="SkillsetImg-bootstrap-underline rounded-pill"></div>
        <h2 className="SkillsetImg-bootstrap-name">Bootstrap</h2>
      </div>
      <div className="SkillsetImg-babel-container">
        <img className="SkillsetImg-babel" src={logobabel} alt={logobabel} />
        <div className="SkillsetImg-babel-underline rounded-pill"></div>
        <h2 className="SkillsetImg-babel-name">Babel</h2>
      </div>
      <div className="SkillsetImg-webpack-container">
        <img className="SkillsetImg-webpack" src={logowebpack} alt={logowebpack} />
        <div className="SkillsetImg-webpack-underline rounded-pill"></div>
        <h2 className="SkillsetImg-webpack-name">WebPack</h2>
      </div>
      <div className="SkillsetImg-nodejs-container">
        <img className="SkillsetImg-nodejs" src={logonodejs} alt={logonodejs} />
        <div className="SkillsetImg-nodejs-underline rounded-pill"></div>
        <h2 className="SkillsetImg-nodejs-name">Nodejs</h2>
      </div>
      <div className="SkillsetImg-gsap-container">
        <img className="SkillsetImg-gsap" src={logogsap} alt={logogsap} />
        <div className="SkillsetImg-gsap-underline rounded-pill"></div>
        <h2 className="SkillsetImg-gsap-name">GSAP</h2>
      </div>
      <div className="SkillsetImg-sql-container">
        <img className="SkillsetImg-sql" src={logosql} alt={logosql} />
        <div className="SkillsetImg-sql-underline rounded-pill"></div>
        <h2 className="SkillsetImg-sql-name">SQL</h2>
      </div>
      <div className="SkillsetImg-es6-container">
        <img className="SkillsetImg-es6" src={logoes6} alt={logoes6} />
        <div className="SkillsetImg-es6-underline rounded-pill"></div>
        <h2 className="SkillsetImg-es6-name">es6</h2>
      </div>
    </div>
  )
}

export default SkillsetImg
