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
                </div>
            <div className="SkillsetImg-css-container">
                <img className="SkillsetImg-css" src={logocss} alt={logocss} />
                </div>
            <div className="SkillsetImg-js-container">
                <img className="SkillsetImg-js" src={logojavascript} alt={logojavascript}/>
                </div>
            <div className="SkillsetImg-reactjs-container">
                <img className="SkillsetImg-reactjs" src={logoreactjs} alt={logoreactjs}/>
                </div>
            <div className="SkillsetImg-github-container">
                <img className="SkillsetImg-github" src={logogithub} alt={logogithub}/>
                </div>    
            <div className="SkillsetImg-bootstrap-container">
                <img className="SkillsetImg-bootstrap" src={logobootstrap} alt={logobootstrap}/>
                    </div>
            <div className="SkillsetImg-babel-container">
                <img  className="SkillsetImg-babel" src={logobabel} alt={logobabel}/>
                </div>
            <div className="SkillsetImg-webpack-container">
                <img className="SkillsetImg-webpack" src={logowebpack} alt={logowebpack}/>
                </div>        
            <div className="SkillsetImg-nodejs-container">
                <img className="SkillsetImg-nodejs" src={logonodejs} alt={logonodejs}/>
                </div>    
        </div>
       
    );
}

export default SkillsetImg;

 