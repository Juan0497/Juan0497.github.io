import React from "react";
import NavbarModal from "../components/NavbarModal";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/PortfolioStyles.css";
import CV from "../../../styles/imgs/CVNE.pdf";


const Navbardownload = () => {
    return (
        <div className="Download-container">
            <a href="#" className="tooltip" data-bs-toggle="tooltip" data-bs-html="true">CV<span><img src={CV}/></span></a>
        </div>
    );
}

export default Navbardownload;

