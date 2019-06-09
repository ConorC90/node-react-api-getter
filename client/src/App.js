import React from "react";
import "./App.css";
import ClientList from "./components/ClientsList";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PoliciesTable from "./components/PoliciesTable";
// import { browserHistroy } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* history={browserHistroy} */}
        <Nav />
        <Router>
          <Route path={"/clients"} component={ClientList} />
          <Route path={"/policies"} component={PoliciesTable} />
        </Router>
        {/* 
        <Nav />
        <ClientList /> */}
      </header>
    </div>
  );
}

export default App;
