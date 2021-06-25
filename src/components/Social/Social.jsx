import React from "react";
import "../../styles/PortfolioStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import Sociallinks from "./components/Sociallinks";
import Socialcoment from "./components/socialcoment";


const Social = () => {
    return(
        <div className="Social-container d-flex" id="Aboutme">
            <Socialcoment/>
            <Sociallinks/>
        </div>
    );
}
  
export default Social;