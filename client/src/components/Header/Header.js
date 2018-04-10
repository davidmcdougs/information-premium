import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Login from "../Login";

class BigHeader extends Component {
state = {
  showModal: false
}

render() {
  return (
    <div className="ui top fixed menu center">
      <Link to="/">
        <div className="item">
          <img src="/images/logo.png" alt="Information Premium logo"></img>
        </div>
      </Link>
      <a className="item">
        <Login text={true} />
      </a>
      <Link to="/create_question/">
        <div className="item"><p className="center auto">Ask</p></div>
      </Link>
      <Link to="/search/">
        <div className="item"><p className="center auto">Answer</p></div>
      </Link>

    </div>
    )
  }
}
export default BigHeader;