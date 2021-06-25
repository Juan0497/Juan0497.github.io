import React from "react";
import github  from "../../../styles/imgs/GitHub.png";
import linkedin from "../../../styles/imgs/LinkedIn.png";
import gmail from "../../../styles/imgs/gmail.png"
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/PortfolioStyles.css";

const Sociallinks = () => {
    return (
        <div className="Social-links">
            <div className="Social-links-background">
                <h1 className="Social-links-title ">Find me</h1>
                <div className="Social-links-title-underline rounded-pill"></div>
                <div className="Social-links-container d-flex">
                <div className="Social-links-linkedin d-flex">
                    <a className="Social-links-linkedin-href d-flex" href="https://www.linkedin.com/in/juan-fernandez-91089911a/"><img src={linkedin} alt={linkedin} /> </a>
                </div>
                <div className="Social-links-gmail d-flex" >
                    <img src={gmail} alt={gmail} data-bs-toggle="tooltip" data-bs-placement="top" title="Juan97f@gmail.com" />
                </div>
                <div className="Social-links-github d-flex">
                    <a className="d-flex" href="https://github.com/Juan0497"><img src={github} alt={github} /></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Sociallinks;