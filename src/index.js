// React Components
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

// My Components
import App from "./Component/App";
import Misc from "./Component/Misc/Misc.jsx";

// CSS
import "./index.css";

ReactDOM.render(<Pages />, document.getElementById("root"));

function Pages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/misc" component={Misc} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

function NotFound() {
  const gridSection = {
    textAlign: "center",
    height: "100vh",
    width: "100vw",
    display: "grid",
    placeItems: "center",
    padding: "1rem",
  };
  const h1 = {
    fontSize: "5rem",
  };
  const nav = {
    position: "fixed",
    top: "0",
    zIndex: "1",
  };
  const aLink = { fontSize: "1.5rem", textDecoration: "none", margin: ".3rem" };
  return (
    <>
      <nav style={nav}>
        <a href="/" style={aLink} title="Back to home.">
          ↩
        </a>
      </nav>
      <section style={gridSection}>
        <div>
          <h1 style={h1}>404 NOT FOUND!</h1>
          <p>
            The page your are looking for doesn't exist.
            <br />
            Go back to <Link to="/">Home page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
