import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import BigHeader from "../../components/Header";
import Searchbar from "../../components/Search";
import './Home.css';
// import logic from './logic.js';
import { Button, Header, Image, Modal, Form, Container, TextArea, Grid} from 'semantic-ui-react';

const colors = {
    blue: "#46dde2"
}

const myStyles = {
  backgroundColor: colors.blue,
}

class Home extends Component {
  state = {
    email: "",
    handle: ""
  }
  handleFormSubmit = (route) => {
  }
  updateStateAfterLogin(authenticatedUser) {
    //this will let you get the state of the login component.
   this.setState({
    email: authenticatedUser.email,
    handle: authenticatedUser.handle
   });
   console.log(this.state);
  }
  render() {
    return (
  <div style={myStyles}>
    <BigHeader/>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={4}>
            <Login handleUserLogin={this.updateStateAfterLogin}/>
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
          <Searchbar/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            {/* <p>
            Ask A Question Here
            </p> */}
            <Form>
            <TextArea placeholder='What Info do you need?' />
              <Link to ="/create_question">
                <Grid.Column floated='left' width={2}>
                  <Button onClick={this.handleFormSubmit} color='orange'>
                  Submit
                  </Button>
                </Grid.Column>
              </Link>
              <Link to ="/search">
                <Grid.Column floated='right' width={2}>
                  <Button color='orange'>
                    Browse Questions   
                  </Button>
                </Grid.Column>
              </Link>
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