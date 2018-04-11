import React, { Component } from 'react';
import './App.css';
import { Button, Header, Form, Container, TextArea, Checkbox, Grid} from 'semantic-ui-react';
import api from "./../../utils/api";
import Login from "../../components/Login";
import TopicDropDown from "../../components/TopicDropDown";
import BigHeader from "../../components/Header"
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
    questionTopic: null
  }
  
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
        })
      }
    }

    handleInputChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }
    handleDropDownChange = (event, data) => {
      console.log(data);
      const value = event.target.innerText;
      console.log(value);
      this.setState({
        questionTopic: value
      })
      console.log(this.state)
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
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
      <div classname="ui center aligned grid">
        <BigHeader />
          <Grid>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
              <Container>
                {this.state.loggedInUser
                ? ""
                :<Login button={false} showModal={true} contextMessage="Please signup or login before posting a new question"/>
                }
              </Container>
              <Container>
                <Form size={"small"} key={"small"}>
                <Checkbox toggle label="Include a reward?" onChange={this.toggleReward} />
                  {/* <ShowRewardOptions reward={this.state.reward} /> */}
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
                <Button color='teal' onClick={this.handleFormSubmit}>
                Submit
                </Button>
              </Container>
              <Container>
              </Container>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}




export default withUser(CreateQuestion);