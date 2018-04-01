import React, { Component } from 'react';
import './App.css';
import { Button, Header, Image, Modal, Form, Container, TextArea, Checkbox } from 'semantic-ui-react';
import api from "./../../utils/api";
import { withUser } from './../../services/withUser';

//todo: add conditional rendering after boolean sliders. add integration with user object in order to complete post API

function RewardOptions(props) {
  return <Form.Input label='How much of a reward would you like to offer?' type='text' />
}

function ShowRewardOptions(props) {
  const reward = props;
  console.log(props)
  if (reward == true) {
    return <RewardOptions />
  }
  else {return <h1>failure</h1>}
}

class CreateQuestion extends Component {
  state = {
    originalQuestion: "",
    loggedInUser: "verytest",
    reward: false,
    rewardAmount: null,
    rewardTimeLimit: null,
    questionTopic: null,
  }
    componentDidMount() {
      alert(this.props.user);
    }
    toggleReward = () =>   {
      console.log(this.state);
     this.setState({ reward: true });
    }

    handleInputChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }

    handleFormSubmit = (event) => {
      event.preventDefault;
      alert(JSON.stringify(this.state));
      //edit this newQuestion object once you have authentication
      api.makeNewQuestion(
        this.state.originalQuestion,
        this.state.loggedInUser,
        this.state.reward,
        this.state.rewardAmount,
        this.state.rewardTimeLimit,
        this.state.questionTopic
      ).then(response => {
        console.log(JSON.stringify(response));
      });
    }
    
  render()  {
      return (
      <div>
        <Header size='huge'>
        Information Premium
        </Header>
        <Container>
          Question submitted appears here
        </Container>
        <Container>
          <Form size={"small"} key={"small"}>
          <Checkbox toggle label="include a reward?" onChange={this.toggleReward} />
            {/* <ShowRewardOptions reward={this.state.reward} /> */}
            <Form.Input label='How much of a reward would you like to offer?' type='text' name="rewardAmount" onChange={this.handleInputChange} value={this.state.rewardAmount} />
            <Checkbox toggle label="include a time Restriction?" onChange={this.toggleReward} />
            <Form.Input label='How much time before the reward expires?' type='text' name="rewardTimeLimit" onChange={this.handleInputChange} value={this.state.rewardTimeLimit}/>
            <Form.Input label='What topic does your question address?' type='text' name="questionTopic" onChange={this.handleInputChange} value={this.state.questionTopic}/>
            {/* this should be a drop down */}
            <TextArea placeholder='What Info do you need?' name="originalQuestion" onChange={this.handleInputChange} value={this.state.originalQuestion}/>
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




export default CreateQuestion;