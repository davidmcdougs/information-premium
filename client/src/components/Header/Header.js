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
<Link to ="/">
  <div className="item">
    <img src="/images/logo.png"></img>
  </div>
</Link>
  <a className="item">
    <Login text={true} />
  </a>
  <Link to ="/create_question/">
  <a className="item"><p className="center auto">Ask</p></a>
  </Link>
  <Link to ="/search/">
  <a className="item"><p className="center auto">Answer</p></a>
  </Link>

</div>
    )
  }
}
export default BigHeader;