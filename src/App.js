import React from "react";

// Screens
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import PostForm from "./screens/Form";

//RRD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Popular from "./screens/Popular";
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
import Menu from "./components/Menu";

function App() {
  return (
    <>

      <Router>
        <NavBar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/Popular">
            <h1>POPULAR</h1>
            <Popular />
          </Route>
          <Route path="/momentum">
            <Momentum />
          </Route>
          <Route path="/coronavirus">
            <h1>CORONAVIRUS</h1>
            <Coronavirus />
          </Route>
          <Route path="/onezero">
            <h1>ONEZERO</h1>
            <Onezero />
          </Route>
          <Route path="/elemental">
            <h1>ELEMENTAL</h1>
            <Elemental />
          </Route>
          <Route path="/gen">
            <h1>GEN</h1>
            <Gen />
          </Route>

          <Route path="/forge">
            <h1>FORGE</h1>
            <Forge />
          </Route>
          <Route path="/marker">
            <h1>MARKER</h1>
            <Marker />
          </Route>
          <Route path="/level">
            <h1>LEVEL</h1>
            <Level />
          </Route>
          <Route path="/heated">
            <h1>HEATED</h1>
            <Heated />
          </Route>
          <Route path="/more">
            <h1>MORE</h1>
          </Route>
          <Route path="/new_post">
            <PostForm />
          </Route>
          <Route path="/blog/:id">
            <Detail />
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
            {/*<Menu mediumPath="humanParts" />*/}
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
