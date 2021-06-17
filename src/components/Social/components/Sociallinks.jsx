import React from "react";
import github  from "../../../styles/imgs/GitHub.png";
import linkedin from "../../../styles/imgs/LinkedIn.png";
import gmail from "../../../styles/imgs/gmail.png"
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/PortfolioStyles.css";

const Sociallinks = () =>{
    return(
    <div className="Social-links">           
        <div className="Social-links-linkedin d-flex">
            <img src={linkedin} alt={linkedin} /> <a></a>
        </div>
        <div className="Social-links-gmail d-flex">
            <img src={gmail} alt={gmail} />  <a></a>
        </div>
        <div className="Social-links-github d-flex">
            <img src={github} alt={github} /> <a></a>
        </div>
    </div>
    );
}

export default Sociallinks;