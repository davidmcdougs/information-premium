import React, { Component } from 'react';
import './BrowsePosts.css';
import Box from "../../components/Box";
import BigHeader from "../../components/Header";
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
      console.log(this.state.searchResults);
    })
  }
  render() {
    return (
      <div className="container">
        <BigHeader/>
        { this.state.searchResults.length > 0 
          ? this.state.searchResults.map( (currentQuestion, i) => (
            <div key={i}>
              <Box 
              question={currentQuestion.details.posts.originalQuestion}
              topic={currentQuestion.details.topic}
              reward={currentQuestion.details.rewardAmount}
              createdBy={currentQuestion.general.createdBy}
              totalResponses={currentQuestion.details.posts.answers}
              id={currentQuestion._id}
              />
            </div>
          ))
          : "loading....."
        }
      </div>
    );
  } 
}

export default Search