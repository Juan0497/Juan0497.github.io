import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/PortfolioStyles.css";

const Navbar = () => (
    <div className="Navbar-container d-flex flex-row  justify-content-between">
         <div className="Navbar-botons p-4  ">
             <a href="#" className="navbar-nav">Home</a>
             <a href="#" className="navbar-nav">Projects</a>
             <a href="#" className="navbar-nav">Skill Set</a>
             <a href="#" className="navbar-nav">Social media</a>
         </div>
         <div className="Navbar-download p-4 ">
            <a href="#" className="navbar-nav">CV</a>
         </div>
     </div>  
    );

    export default Navbar;