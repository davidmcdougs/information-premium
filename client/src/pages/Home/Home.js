import React, { Component } from 'react';
// import { Link} from "react-router-dom";
// import Login from "../../components/Login";
import BigHeader from "../../components/Header";
import './Home.css';
// import logic from './logic.js';
import { Form, Grid, Input } from 'semantic-ui-react';
// import { Button, Form,  Grid, Input, Icon} from 'semantic-ui-react';

const colors = {
    blue: "#46dde2"
};

const myStyles = {
  backgroundColor: colors.blue,
};

class Home extends Component {
  state = {
    email: "",
    handle: "",
    queryBox: "",
    directToMakeQuestion: false
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    sessionStorage.queryBox = this.state.queryBox;
    this.props.history.push("/create_question");
  }
  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
  <div style={myStyles}>
    <BigHeader/>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={4}>
          {/* <Login button={true}/> */}
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            {/* <p>
            Ask A Question Here
            </p> */}
            <Form>
            <Input onChange={this.handleInputChange} name="queryBox" value={this.state.queryBox} 
                action={{ color: 'teal', labelPosition: 'right', icon: 'question circle', content: 'Ask the world', onClick:this.handleFormSubmit }}
                placeholder='compose a question...'
                />
              {/* <Link to ="/search">
                <Grid.Column floated='right' width={2}>
                  <Button color='orange'>
                    Browse Questions   
                  </Button>
                </Grid.Column> */}
              {/* </Link> */}
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </div>
    );
  }
}




export default Home;