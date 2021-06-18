import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carruceltitle from "../components/Carrucel/Carruceltitle";
import Carrucel from "../components/Carrucel/Carrucel";
import Skillsettitle from "../components/Skillset/Skillsettitle";
import Skillset from "../components/Skillset/Skillset";
import Social from "../components/Social/Social";
import foote from "../styles/imgs/footer.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/PortfolioStyles.css";



const App = () => {
    return(
        <div className="App-container">
            <div className="App-hero d-flex justify-content-center">
                 <img className="App-img" src={foote} alt={foote}/>
            </div>  
            <div className="App-hero-line"/>
            <div className="App-Navbar fixed-top">
                 <Navbar/>
                 </div>
                <Carruceltitle/>
                 <Carrucel/>
                 <Skillsettitle/>
                 <Skillset/>
            <div className="App-footer ">
                 <Social/>
            </div>     
        </div>
    );
};

export default App;