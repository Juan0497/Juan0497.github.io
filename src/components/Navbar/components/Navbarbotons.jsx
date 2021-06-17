import React from "react";
import Navbardownload from "./Navbardownload";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/PortfolioStyles.css";

const Navbarbotons = () => {
    return(
        <div className="Navbar-container d-flex flex-row justify-content-between w-sm-20 w-md-50 w-lg-100 w-xl-100">
              <div className="Navbar-botons p-4  ">
                 <a href="#" className="navbar-nav">Home</a>
                 <a href="#" className="navbar-nav">Projects</a>
                 <a href="#" className="navbar-nav">Skill Set</a>
                 <a href="#" className="navbar-nav">About me</a>
              </div>
         <div className="Navbar-download p-4 ">
           <Navbardownload/>
         </div>
        </div>
    );
}

export default Navbarbotons;