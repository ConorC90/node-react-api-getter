import React from "react";
import "./App.css";
import ClientList from "./components/ClientsList";
import MatchingClients from "./components/MatchingClients";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PoliciesTable from "./components/PoliciesTable";

import MatchingPolicies from "./components/MatchingPolicies";
// import { browserHistroy } from "react-router";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authLevel") === "admin" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const UserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authLevel") === "user" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* history={browserHistroy} */}
        <Nav />
        <Router>
          <Route path={"/login"} component={Login} />
          <UserRoute path={"/clients"} component={ClientList} />
          <AdminRoute path={"/policies"} component={PoliciesTable} />
          <AdminRoute path={"/client/:clientId"} component={MatchingPolicies} />
          <AdminRoute path={"/policy/:policyId"} component={MatchingClients} />
        </Router>
        {/* 
        <Nav />
        <ClientList /> */}
      </header>
    </div>
  );
}

export default App;
