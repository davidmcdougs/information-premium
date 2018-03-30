import React, { Component } from 'react';
import './Box.css';
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react'



const Box = () => (
  
  <Card>
    <Card.Content>
      <Card.Header>
        This is where the question will appear
      </Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
        This is where the rewards will appear
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Card.Description>
    Total User Responses: 3
    </Card.Description>
    <Card.Description>
    Username
    </Card.Description>
      <Button>
      Open
      </Button>
    </Card.Content>
  </Card>
  )

export default Box;