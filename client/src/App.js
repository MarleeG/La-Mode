import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/page/home";

const App = () => {
  let content = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Redirect to="/"/>
    </Switch>
  );
  return (
    <Router>
      <div className="App">{content}</div>
    </Router>
  );
};

export default App;
