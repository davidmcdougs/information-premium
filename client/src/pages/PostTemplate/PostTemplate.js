import React, { Component } from 'react';
import './PostTemplate.css';
import api from "../../utils/api";
import ViewQuestion from "../../components/ViewQuestion";
import BigHeader from "../../components/Header";
import Answers from "../../components/Answers";
import {Comment, Form, Button, Grid} from "semantic-ui-react";
import { withUser } from '../../services/withUser';


class PostTemplate extends Component {
  state = {
    searchResult: null,
    answerBox: "",
    loggedInUser: false,
    error: false
  }
  componentDidMount() {
    api.getOneQuestion(this.props.match.params.id)
    .then(response => {
        this.setState({
          searchResult: response.data
        });
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
    this.setState({error: false});
    if (!this.state.loggedInUser){
        if(!this.props.user) {
          this.setState({error: "you must be logged in to submit a reply."})
        }
        else {
          this.setState({
            loggedInUser: this.props.user.handle
          })
          // alert(this.props.user.handle)
          // alert(JSON.stringify(this.state));
          api.makeNewAnswer(this.props.match.params.id, this.state.answerBox, this.props.user.handle).then(response => {
            window.location.reload();
          });
        }
    }
  }
render() {
  return (
    <div>
      <Grid>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
      </Grid>
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
          {this.state.error
          ? <h1 className="red">{this.state.error}</h1>
          :""
          }
          <Form reply>
           <Form.TextArea name="answerBox" onChange={this.handleInputChange} value={this.state.answerBox} />
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