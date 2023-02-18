import React from "react";
import Router from "./router";
import MainPage from "../src/pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router />
      <MainPage />
    </div>
  );
};

export default App;
