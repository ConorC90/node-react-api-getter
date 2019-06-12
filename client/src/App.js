import React from "react";
import "./App.css";
import ClientList from "./components/ClientsList";
import MatchingClients from "./components/MatchingClients";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PoliciesTable from "./components/PoliciesTable";

import MatchingPolicies from "./components/MatchingPolicies";
// import { browserHistroy } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* history={browserHistroy} */}
        <Nav />
        <Router>
          <Route path={"/login"} component={Login} />
          <Route path={"/clients"} component={ClientList} />
          <Route path={"/policies"} component={PoliciesTable} />
          <Route path={"/client/:clientId"} component={MatchingPolicies} />
          <Route path={"/policy/:policyId"} component={MatchingClients} />
        </Router>
        {/* 
        <Nav />
        <ClientList /> */}
      </header>
    </div>
  );
}

export default App;
