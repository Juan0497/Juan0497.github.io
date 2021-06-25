import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./containers/App";
import NavbarCV from "./components/Navbar/components/NavbarCV";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/curriculumvitae" component={NavbarCV}/>
        </Switch>

    </BrowserRouter>,
    document.getElementById("app"));