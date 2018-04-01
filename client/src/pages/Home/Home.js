import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import './Home.css';
// import logic from './logic.js';
import { Button, Header, Image, Modal, Form, Container, TextArea } from 'semantic-ui-react';

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
    <div>
      <Header size='huge' className="jumboTron">
      Information Premium
      </Header>
      <Container>
        <Login handleUserLogin={this.updateStateAfterLogin}/>
      </Container>
      <Container>
        {/* <p>
        Ask A Question Here
        </p> */}
        <Form>
        <TextArea placeholder='What Info do you need?' />
         <Link to ="/create_question">
          <Button onClick={this.handleFormSubmit}>
            submit
          </Button>
          </Link>
        </Form>
      </Container>
      <Container>
        or Browse Previously Asked Questions
        <Link to ="/search">
          <Button>
        Browse Questions   
        </Button>
        </Link>  
      </Container>
    </div>
    );
  }
}




export default Home;