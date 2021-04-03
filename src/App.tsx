import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { startPageLoad, stopPageLoad, Toast } from "./components/Utils";

function App() {
  useEffect(() => {
    startPageLoad();
    setTimeout(() => {
      stopPageLoad();
      Toast("Welcome to beta", "");
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Beta React Web app boiler plate</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
