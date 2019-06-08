import React from "react";
import "./App.css";
import ClientList from "./components/ClientsList";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <ClientList />
      </header>
    </div>
  );
}

export default App;
