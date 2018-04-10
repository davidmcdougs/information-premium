import React from 'react';
import { Button, Header, Image, Modal, Form, Container, TextArea } from 'semantic-ui-react';

const ViewQuestion = (props) => (
<div>
    <Header size='huge'>
      Information Premium
</Header>
    <Container>
      Original Question: {props.question}
</Container>
<Container>
      Created By: {props.createdBy}
</Container>
<Container>
      topic: {props.topic}
</Container>
    <Container>
      Reward amount: ${props.reward}
</Container>
  </div>
)

export default ViewQuestion;