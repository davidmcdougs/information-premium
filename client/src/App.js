import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import JumboTron from "./components/Jumbotron";
import Searchland from "./components/Searchland";
import SubmitBtn from "./components/SubmitBtn";
import api from "./utils/api";
class App extends Component {

   state = {
    numRecordsSelect: null,
    searchTerm: "",
    startYear: null,
    endYear: null
   };
   
  handleFormSubmit = event => {
  event.preventDefault();
  const results = api.search();
  alert(results);
  // alert(JSON.stringify(this.state));
  this.setState({
    numRecordsSelect: null,
    searchTerm: "",
    startYear: null,
    endYear: null,
  });
  };
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
    <div className="container">
      {/* <Nav /> */}
      <JumboTron />
      <Searchland handleInputChange={this.handleInputChange} value={this.state}>
      <SubmitBtn onClick={this.handleFormSubmit}/>
      </Searchland>
    </div>
    );
  }
}   

export default App;


