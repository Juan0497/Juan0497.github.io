import React from "react";
import "../../../styles/PortfolioStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import logohtml from "../../../styles/imgs/logohtml.png";
import logocss from "../../../styles/imgs/logocss.png";
import logojavascript from "../../../styles/imgs/logojavascript.png";
import logoreactjs from "../../../styles/imgs/logoreactjs.svg";
import logogithub from "../../../styles/imgs/logogithub.svg";
import logobootstrap from "../../../styles/imgs/logobootstrap.svg";
import logobabel from "../../../styles/imgs/logobabel.svg";
import logowebpack from "../../../styles/imgs/logowebpack.svg";
import logonodejs from "../../../styles/imgs/logonodejs.svg";

const SkillsetImg = () =>{
    return(
       
        <div className="SkillsetImg-container">
            <div className="SkillsetImg-html-container">
                <img className="SkillsetImg-html" src={logohtml} alt={logohtml}/>
                <div className="SkillsetImg-html-underline"></div>
                <h2 className="SkillsetImg-html-name">Html5</h2>
                </div>
            <div className="SkillsetImg-css-container">
                <img className="SkillsetImg-css" src={logocss} alt={logocss} />
                <div className="SkillsetImg-css-underline"></div>
                <h2 className="SkillsetImg-css-name">CSS3</h2>
                </div>
            <div className="SkillsetImg-js-container">
                <img className="SkillsetImg-js" src={logojavascript} alt={logojavascript}/>
                <div className="SkillsetImg-js-underline"></div>
                <h2 className="SkillsetImg-js-name">JavaScript</h2>
                </div>
            <div className="SkillsetImg-reactjs-container">
                <img className="SkillsetImg-reactjs" src={logoreactjs} alt={logoreactjs}/>
                <div className="SkillsetImg-reactjs-underline"></div>
                <h2 className="SkillsetImg-reactjs-name">Reactjs</h2>
                </div>
            <div className="SkillsetImg-github-container">
                <img className="SkillsetImg-github" src={logogithub} alt={logogithub}/>
                <div className="SkillsetImg-github-underline"></div>
                <h2 className="SkillsetImg-github-name">Github</h2>
                </div>    
            <div className="SkillsetImg-bootstrap-container">
                <img className="SkillsetImg-bootstrap" src={logobootstrap} alt={logobootstrap}/>
                <div className="SkillsetImg-bootstrap-underline"></div>
                <h2 className="SkillsetImg-bootstrap-name">Bootstrap</h2>
                    </div>
            <div className="SkillsetImg-babel-container">
                <img  className="SkillsetImg-babel" src={logobabel} alt={logobabel}/>
                <div className="SkillsetImg-babel-underline"></div>
                <h2 className="SkillsetImg-babel-name">Babel</h2>
                </div>
            <div className="SkillsetImg-webpack-container">
                <img className="SkillsetImg-webpack" src={logowebpack} alt={logowebpack}/>
                <div className="SkillsetImg-webpack-underline"></div>
                <h2 className="SkillsetImg-webpack-name">WebPack</h2>
                </div>        
            <div className="SkillsetImg-nodejs-container">
                <img className="SkillsetImg-nodejs" src={logonodejs} alt={logonodejs}/>
                <div className="SkillsetImg-nodejs-underline"></div>
                <h2 className="SkillsetImg-nodejs-name">Nodejs</h2>
                </div>    
        </div>
       
    );
}

export default SkillsetImg;

 