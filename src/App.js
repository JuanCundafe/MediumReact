import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Popular from "./screens/PopularMedium";
import Momentum from "./screens/MomentumMedium/momentum";
import NavBar from "./components/navBar";

import Menu from "./components/Menu";
import GetMedium from "./screens/Hooks";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact={true} path="/">
            <>
              <Menu mediumPath="home" />
              <h1>Home</h1>
            </>
          </Route>
          <Route path="/PopularMedium">
            <Menu mediumPath="PopularMedium" />
            <Popular />
          </Route>
          <Route path="/momentum">
            <Menu mediumPath="momentum" />
            <Momentum />
          </Route>
          <Route path="/hooks">
            <GetMedium />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
