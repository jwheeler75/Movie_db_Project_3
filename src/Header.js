import React, { Component } from "react";
import "./Header.css";
import { Route, Link, Switch } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="flex-title">
          <h1 className="title">The Movie Db</h1>
        </div>
        <nav>
          <Link className="link" to="/">
            Back to Home
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
