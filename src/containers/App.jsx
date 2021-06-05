import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/PortfolioStyles.css";
import hero from "../styles/imgs/hero.jpg";


const App = () => {
    return(
        <div className="App-container">
            <div className="App-hero d-flex justify-content-center">
             <img className="App-img" src={hero} alt={hero}/>
            </div>  
        <Navbar/>
        </div>
    );
};

export default App;