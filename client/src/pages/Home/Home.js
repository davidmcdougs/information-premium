import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import './Home.css';
// import logic from './logic.js';
import { Button, Header, Image, Modal, Form, Container, TextArea } from 'semantic-ui-react';

class Home extends Component {
  handleFormSubmit = (route) => {
  }
  render() {
    return (
    <div>
      <Header size='huge' className="jumboTron">
      Information Premium
      </Header>
      <Container>
        <Login />
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