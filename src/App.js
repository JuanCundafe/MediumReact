import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Popular from "./screens/PopularMedium";
import Momentum from "./screens/MomentumMedium/momentum";
import NavBar from "./components/navBar";
import Coronavirus from "./screens/coronavirus";
import Elemental from "./screens/elemental";
import Forge from "./screens/forge";
import Gen from "./screens/gen";
import Heated from "./screens/heated";
import HumanParts from "./screens/humanParts";
import Level from "./screens/level";
import Marker from "./screens/marker";
import Onezero from "./screens/onzero";
import Zora from "./screens/zora";
import Menu from "./components/Menu";

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
          <Route path="/coronavirus">
            <Menu mediumPath="coronavirus" />
            <Coronavirus />
          </Route>
          <Route path="/elemental">
            <Menu mediumPath="elemental" />
            <Elemental />
          </Route>
          <Route path="/forge">
            <Menu mediumPath="forge" />
            <Forge />
          </Route>
          <Route path="/gen">
            <Menu mediumPath="gen" />
            <Gen />
          </Route>
          <Route path="/heated">
            <Menu mediumPath="heated" />
            <Heated />
          </Route>
          <Route path="/humanParts">
            <Menu mediumPath="humanParts" />
            <HumanParts />
          </Route>
          <Route path="/level">
            <Menu mediumPath="level" />
            <Level />
          </Route>
          <Route path="/marker">
            <Menu mediumPath="marker" />
            <Marker />
          </Route>
          <Route path="/onezero">
            <Menu mediumPath="onezero" />
            <Onezero />
          </Route>
          <Route path="/zora">
            <Menu mediumPath="zora" />
            <Zora />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
