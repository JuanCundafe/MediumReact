import React from "react";

// Screens
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import PostForm from "./screens/Form";

//RRD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <PostForm />
          </Route>
          <Route exact path="/Home">
            <PostForm />
          </Route>
          <Route path="/popular">
            <h1>POPULAR</h1>
          </Route>
          <Route path="/momentum">
            <h1>MOMENTUM</h1>
          </Route>
          <Route path="/coronavirus">
            <h1>CORONAVIRUS</h1>
          </Route>
          <Route path="/onezero">
            <h1>ONEZERO</h1>
          </Route>
          <Route path="/elemental">
            <h1>ELEMENTAL</h1>
          </Route>
          <Route path="/gen">
            <h1>GEN</h1>
          </Route>
          <Route path="/zora">
            <h1>ZORA</h1>
          </Route>
          <Route path="/forge">
            <h1>FORGE</h1>
          </Route>
          <Route path="/human-parts">
            <h1>HUMAN PARTS</h1>
          </Route>
          <Route path="/marker">
            <h1>MARKER</h1>
          </Route>
          <Route path="/level">
            <h1>LEVEL</h1>
          </Route>
          <Route path="/heated">
            <h1>HEATED</h1>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
