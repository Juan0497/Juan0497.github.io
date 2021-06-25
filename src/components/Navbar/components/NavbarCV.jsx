import React from "react";
import { Link } from "react-router-dom";
import imgCV from "../../../styles/imgs/footer.jpg";
import "../../../styles/PortfolioStyles.css";


const NavbarCV = () => {
    return(
        <div className="NavbarCV-container d-flex justify-content-center align-content-center">
            <Link to="/"> 
            <button className="btn btn-outline-secondary">IMG</button>
            </Link>
            <img src={imgCV} alt={imgCV}/>
        </div>
    );
}

export default NavbarCV;