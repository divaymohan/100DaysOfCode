import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <h1>
        <span className="badge badge-dark text-success">movie app</span>{" "}
      </h1>
      <Movies />
    </main>
  );
}

export default App;
