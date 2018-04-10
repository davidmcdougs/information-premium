import React, { Component } from 'react';
import './PostTemplate.css';
import api from "../../utils/api";
import ViewQuestion from "../../components/ViewQuestion";
import BigHeader from "../../components/Header";
import Answers from "../../components/Answers";
import {Comment, Form, Button} from "semantic-ui-react";
import { withUser } from '../../services/withUser';


class PostTemplate extends Component {
  state = {
    searchResult: null,
    answerBox: "",
    loggedInUser: false
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

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState
    if (!this.state.loggedInUser){
        if(!this.props.user) {
          alert("you must be logged in to post a reply.")
        }
        else {
          this.setState({
            loggedInUser: this.props.user.handle
          })
        }
    }
      console.log(JSON.stringify(this.state));
      api.makeNewAnswer(this.props.match.params.id, this.state.answerBox, this.state.loggedInUser).then(response => {
        console.log(JSON.stringify(response));
        window.location.reload();
      });
    }
render() {
  return (
    <div>
      <BigHeader />
      { this.state.searchResult
      ? 
        <div>
          <ViewQuestion 
                question={this.state.searchResult.details.posts.originalQuestion}
                topic={this.state.searchResult.details.topic}
                reward={this.state.searchResult.details.rewardAmount}
                createdBy={this.state.searchResult.general.createdBy}
                totalResponses={this.state.searchResult.details.posts.answers.length}
                id={this.state.searchResult._id}
           />
           <Comment.Group>
      {this.state.searchResult.details.posts.answers.length > 0
      ? this.state.searchResult.details.posts.answers.map( (currentAnswer, i) => (
        <div key={i}>
          <Answers
           createdBy={currentAnswer.createdBy}
           createdOn={currentAnswer.createdOn}
           answerText={currentAnswer.answerText}
          />
        </div>
      ))
      : "fetching comments..."
      }
          </Comment.Group>
          <Form reply>
           <Form.TextArea name="answerBox" onChange={this.handleInputChange} value={this.state.answerBox}/>
            <Button onClick={this.handleFormSubmit} content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </div>
    : "loading...."
    }
    
    </div>
);
}
}


export default withUser(PostTemplate);