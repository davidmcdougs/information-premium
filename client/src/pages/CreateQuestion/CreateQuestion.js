import React, { Component } from 'react';
import './App.css';
import { Button, Form, Container, TextArea, Checkbox, Grid} from 'semantic-ui-react';
import api from "./../../utils/api";
// import Login from "../../components/Login";
import TopicDropDown from "../../components/TopicDropDown";
import BigHeader from "../../components/Header";
import { withUser } from './../../services/withUser';


class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.passUserToParent = props.handleUserLogin;
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }
  state = {
    user: {},
    originalQuestion: "",
    loggedInUser:  false,
    reward: false,
    rewardAmount: null,
    rewardTimeLimit: null,
    questionTopic: null,
    showError: false,
    errorMessage: ""
  };

    componentDidMount() {
      if (sessionStorage.queryBox) {
        this.setState({
          originalQuestion: sessionStorage.queryBox
        })
      }
      if (!this.state.loggedInUser){
      }
      else {
        this.setState({
          loggedInUser: this.props.user.handle
        })
      }
    }

    toggleReward = () =>   {
      if (this.state.reward) {
        this.setState({
          reward: false
        });
      }
      else {
        this.setState({
          reward: true
        });
      }
    };

    handleInputChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    };

    handleDropDownChange = (event, data) => {
      console.log(data);
      const value = event.target.innerText;
      console.log(value);
      this.setState({
        questionTopic: value
      });
      console.log(this.state);
    };

    handleFormSubmit = (event) => {
      event.preventDefault();
      this.setState({showError: false});
      if (!this.state.loggedInUser){
          if(!this.props.user) {
            this.setState({showError: true, errorMessage: "you must signin in order to post a question."})
          }
          else {
            this.setState({
              loggedInUser: this.props.user.handle,
              showError: false
            });
          }
          
      }
      else {
        if(this.state.originalQuestion.length < 7) {
          this.setState({showError: true, errorMessage: "your question must be a little longer."})
        }
        if(!this.state.questionTopic){
          this.setState({showError: true, errorMessage: "please select a topic."})
        }
        if(!this.state.showError) {
        api.makeNewQuestion(
          this.state.originalQuestion,
          this.state.loggedInUser,
          this.state.reward,
          this.state.rewardAmount,
          this.state.rewardTimeLimit,
          this.state.questionTopic
        ).then(response => {
          console.log(response);
          sessionStorage.queryBox = "";
          this.props.history.push("/posts/"+response.data._id);
        });
      }
    }
  };
    
  render()  {
      return (
      <div>
        <BigHeader />
        <Grid><Grid.Row></Grid.Row>
        <Grid.Row>
          <Container>
            {this.state.showError
            ? <h1 className="red bgWhite">{this.state.errorMessage}</h1>
            :""
            }
            <Form size={"small"} key={"small"}>
            <Checkbox toggle label="Include a reward?" onChange={this.toggleReward} />
              {this.state.reward
                ? <Form.Input label='How much of a reward would you like to offer?' type='number' name="rewardAmount" onChange={this.handleInputChange} value={this.state.rewardAmount} />
                : ""
            }
              <br></br>
              <Form.Input label='What topic does your question address?' type='dropdown'>
              <TopicDropDown id="questionTopic" name="questionTopic" onChange={this.handleDropDownChange} value={this.state.questionTopic}/>
              </Form.Input>
              
              <TextArea placeholder='Compose your question here.' name="originalQuestion" onChange={this.handleInputChange} value={this.state.originalQuestion}/>
            </Form>
            <Button onClick={this.handleFormSubmit}>
            Submit
            </Button>
          </Container>
        </Grid.Row></Grid>
      </div>
    );
  }
}




export default withUser(CreateQuestion);