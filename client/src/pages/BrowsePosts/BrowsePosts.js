import React, { Component } from 'react';
import './BrowsePosts.css';
import Box from "../../components/Box";
import BigHeader from "../../components/Header";
import api from "../../utils/api";
import TopicDropDown from "../../components/TopicDropDown";
import { Grid } from 'semantic-ui-react';

class Search extends Component
{
  constructor(props) {
    super(props);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }

  state = {
    searchResults: [],
    searchTopic: null
  }

  handleDropDownChange = (event, data) => {
    // console.log(data);
    const value = event.target.innerText;
    console.log(value);
    this.setState({
      searchTopic: value
    });
    // search
    api.getQuestionByTopic(value)
      .then(response => {
        this.setState({ searchResults: response.data });
      });
    // console.log(this.state);
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
      <div className="container green">
        <BigHeader/>
        <Grid>
          <Grid.Row></Grid.Row>
          <Grid.Row>
          <TopicDropDown id="searchTopic" name="searchTopic" onChange={this.handleDropDownChange} value={this.state.searchTopic}/>
          </Grid.Row>
        </Grid>
        <div className = "row">
        { this.state.searchResults.length > 0 
          ? this.state.searchResults.map( (currentQuestion, i) => (
            <div key={i}>
              <Box 
              question={currentQuestion.details.posts.originalQuestion}
              topic={currentQuestion.details.topic}
              reward={currentQuestion.details.rewardAmount}
              createdBy={currentQuestion.general.createdBy}
              totalResponses={currentQuestion.details.posts.answers.length}
              id={currentQuestion._id}
              />
            </div>
          ))
          : "loading....."
        }
      </div>
    </div>
    );
  } 
}

export default Search