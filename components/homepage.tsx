import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/homepage.css";
import LogIn from './login';
import Hook from './hook';

class Homepage extends Component {

  hookFunc = () => {
    return ("passing function");
  }

  render() {
    return (
      <div>
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          <span style={{ float: "left" }}>
            <LogIn name={"vicky"} number={1}></LogIn>
          </span>
        </div>
        <span style={{ float: "right" }}>
          <button type="button" className="btn btn-info btn-lg" >
            <Link to="/signup">Signup</Link>
          </button>
        </span>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
          <hr className="w3-border-grey" style={{ margin: "auto", width: "140px" }} />
          <p className="w3-large w3-center">35 days left</p>
          <Hook func={this.hookFunc}></Hook>
        </div>
      </div>
    );
  }
}

export default Homepage;