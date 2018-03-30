import React, { Component } from 'react';
import './PostTemplate.css';
import { Button, Header, Image, Modal, Form, Container, TextArea } from 'semantic-ui-react'

const PostTemplate = () => (
  <div>
    <Header size='huge'>
    Information Premium
    </Header>
    <Container>
    This is where the question will appear
    </Container>
    <Container>
    This is where the reward will appear
    </Container>
    <Container>
      <Form>
      <TextArea placeholder='type your answer here' />
      </Form>
    </Container>
    <Container>
      <Form>
      <TextArea rows={1} placeholder='put your source here' />
      </Form>
    </Container>
    <Container>
      <Button>
      Submit 
      </Button>  
    </Container>
    <Container>
      <p>
      Total number of responses: 3
      </p>
    </Container>
    <Container>
      <i>
      Previous Answers go here
      </i>
    </Container>
  </div>
)


export default PostTemplate