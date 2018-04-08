import React, { Component } from 'react';
import './App.css';
import { Button, Header, Form, Container, TextArea, Checkbox} from 'semantic-ui-react';
import api from "./../../utils/api";
import Login from "../../components/Login";
import TopicDropDown from "../../components/TopicDropDown"
import { withUser } from './../../services/withUser';


class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.passUserToParent = props.handleUserLogin;
  }
  state = {
    user: {},
    originalQuestion: "",
    loggedInUser:  false,
    reward: false,
    rewardAmount: null,
    rewardTimeLimit: null,
    questionTopic: null
  }
  
    componentDidMount() {
      if (sessionStorage.queryBox) {
        this.setState({
          originalQuestion: sessionStorage.queryBox
        })
      }
      if (this.props.user.handle){
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
        })
      }
    }

    handleInputChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }

    handleFormSubmit = (event) => {
      event.preventDefault()
      if(!this.state.loggedInUser) {
        alert("Please login before posting a quesiton.")
      }
    //  let topic = document.querySelector('#questionTopic').value;
      // this.setState({
      //   questionTopic: topic
      // })
      alert(JSON.stringify(this.state));
      api.makeNewQuestion(
        this.state.originalQuestion,
        this.state.loggedInUser,
        this.state.reward,
        this.state.rewardAmount,
        this.state.rewardTimeLimit,
        this.state.questionTopic
      ).then(response => {
        console.log(JSON.stringify(response));
        sessionStorage.queryBox = "";
      });
    }
    
  render()  {
      return (
      <div>
        <Header size='huge'>
        Information Premium
        </Header>
        <Container>
          {this.state.loggedInUser
          ? ""
          :<Login button={false} showModal={true} contextMessage="Please signup or login before posting a new question"/>
          }
        </Container>
        <Container>
          <Form size={"small"} key={"small"}>
          <Checkbox toggle label="include a reward?" onChange={this.toggleReward} />
            {/* <ShowRewardOptions reward={this.state.reward} /> */}
            {this.state.reward
              ? <Form.Input label='How much of a reward would you like to offer?' type='number' name="rewardAmount" onChange={this.handleInputChange} value={this.state.rewardAmount} />
              : ""
          }
            <br></br>
            <Form.Input label='What topic does your question address?' type='dropdown'>
             <TopicDropDown id="questionTopic" name="questionTopic" onChange={this.handleInputChange} value={this.state.questionTopic}/>
            </Form.Input>
             
            <TextArea placeholder='Compose your question here.' name="originalQuestion" onChange={this.handleInputChange} value={this.state.originalQuestion}/>
          </Form>
          <Button onClick={this.handleFormSubmit}>
          Submit
          </Button>
        </Container>
        <Container>
        </Container>
      </div>
    );
  }
}




export default withUser(CreateQuestion);