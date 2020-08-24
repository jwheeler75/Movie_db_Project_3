import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { waitForElementToBeRemoved } from "@testing-library/react";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        
          <footer className="footer">
            <h5>copyright 2020 MJD LLC</h5>
            <h3>Powered by MovieDB</h3>
          </footer>
        
      </div>
    );
  }
}
    


export default Footer;
