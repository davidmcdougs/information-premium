import React, { Component } from 'react';
import './PostTemplate.css';
import api from "../../utils/api";
import ViewQuestion from "../../components/ViewQuestion";


class PostTemplate extends Component {
  state = {
    searchResult: null
  }
  componentDidMount() {
    api.getOneQuestion(this.props.match.params.id)
    .then(response => {
        this.setState({
          searchResult: response.data
        });
        console.log(this.state.searchResult);
      }
    )
  }
render() {
  return (
    <div>
      { this.state.searchResult
      ? 
        <ViewQuestion 
              question={this.state.searchResult.details.posts.originalQuestion}
              topic={this.state.searchResult.details.topic}
              reward={this.state.searchResult.details.rewardAmount}
              createdBy={this.state.searchResult.general.createdBy}
              totalResponses={this.state.searchResult.details.posts.answers.length}
              id={this.state.searchResult._id}
    />
    : "loading...."
    }
    </div>
);
}
}


export default PostTemplate