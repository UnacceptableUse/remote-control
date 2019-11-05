import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./login";
import ServersPage from "./servers";
import RecoveryPage from "./recoveryPage";
import JoinServerPage from "./joinServerPage";

export default class IndexRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route component={LoginPage} path="/login" />
          <Route component={RecoveryPage} path="/recovery" />
          <Route component={JoinServerPage} path="/join" />
          <Route component={ServersPage} path="/" />
        </Switch>
      </Router>
    );
  }
}
