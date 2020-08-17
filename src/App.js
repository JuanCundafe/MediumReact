import React from "react";

import Home from "./screens/Home";
import CompleteArticle from "./screens/CompleteArticle";

import { BrowserRouter as Router, Switch, Route, Menu } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/article">
            <CompleteArticle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
