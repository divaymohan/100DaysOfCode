import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <h1>
          <span className="badge badge-dark text-success">movie app</span>
        </h1>
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
