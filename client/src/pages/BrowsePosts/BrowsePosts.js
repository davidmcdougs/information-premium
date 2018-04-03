import React, { Component } from 'react';
import './BrowsePosts.css';
import Box from "../../components/Box";
import api from "../../utils/api";

class Search extends Component
{
  state = {
    searchResults: []
  }
  componentDidMount() {
    api.getAllQuestions().then(response => {
      this.setState({
        searchResults: response.data
      });
      console.log(response);
    })
  }
  render() {
    return (
      <div className="container">
        { this.state.searchResults.length > 0 
          ? this.state.searchResults.map( (currentQuestion, i) => (
            <div key={i}>
              <Box />
            </div>
          ))
          : "loading....."
        }
      </div>
    );
  } 
}

export default Search