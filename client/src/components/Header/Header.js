import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Login from "../Login";

class BigHeader extends Component {
state = {
  showModal: false
}
showModal = () => {
  this.setState({showModal: true});
}

render() {
  return (
<div className="ui top fixed menu">
  <div className="item">
    <img src="/images/logo.png"></img>
  </div>
    {this.state.showModal
    ?<Login showModal={true}/>
    :""
    }
  <a className="item" onClick={this.showModal}>Sign-in</a>
  <a className="item">Ask</a>
  <a className="item">Answer</a>

</div>
    )
  }
}
export default BigHeader;