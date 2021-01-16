import React from "react";
import "./App.css";
import Stats from "./Stats";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <h1>Enter Code:</h1>

            <input
              className="inputBox"
              type="text"
              placeholder="CODE"
              tabindex="0"
              aria-label="code"
              maxlength="23"
              badinput="false"
              dir="ltr"
            ></input>

            <Link to="/Stats">
              <button type="submit">Enter</button>
            </Link>
          </header>
        </div>
      </Route>

      <Route exact path="/Stats">
        {" "}
        <Stats />{" "}
      </Route>
    </Router>
  );
}

export default App;
