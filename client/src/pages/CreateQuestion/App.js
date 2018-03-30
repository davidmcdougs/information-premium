import React, { Component } from 'react';
import './App.css';
import { Button, Header, Image, Modal, Form, Container, TextArea, Checkbox } from 'semantic-ui-react'

const App = () => (
  <div>
    <Header size='huge'>
    Information Premium
    </Header>
    <Container>
      Question submitted appears here
    </Container>
    <Container>
      <p>
      Would you like to include a reward?
      </p>
      <Checkbox label='yes' />
      <Checkbox label='no' />
      <Form>
      <TextArea placeholder='type reward and conditions here' />
      </Form>
      <Button>
      Submit
      </Button>
    </Container>
    <Container>
    </Container>
  </div>
)


export default App;