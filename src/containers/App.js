import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./About";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <div className="tc">
        <Router>
          <div className="tc">
            <nav className="pa3 pa4-ns">
              <Link
                id="siteName"
                className="link dim black b f3 f3-headline-ns tc db mb3 mb4-ns b"
                title="Home"
                to="/"
              >
                RoboFriends
              </Link>
              <div className="tc pb3">
                <Link
                  className="link dim light-green f6 f4-ns dib"
                  to="/about/"
                >
                  About
                </Link>
              </div>
            </nav>

            <Route exact path="/" component={Home} />
            <Route exact path="/about/" component={About} />
          </div>
        </Router>
        <small style={{ color: "rgba(255,255,255,0.4)" }}>
          Inspired by Andrei Neagoie:{" "}
          <a
            style={{ color: "rgba(255,255,255,0.4)" }}
            href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap"
          >
            Course Link
          </a>
        </small>
      </div>
    );
  }
}
