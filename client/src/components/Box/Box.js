import React, { Component } from 'react';
import './Box.css';
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const Box = (props) => (
  <div className="col-sm-12 col-md-6 col-lg-3">
    <Card>
      <Card.Content>
        <Card.Header>
          {props.question}
        </Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Description>
          Question topic: {props.topic}
        </Card.Description>
        <Card.Description>
          Reward: ${props.reward}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Card.Description>
      number of total responses: {props.totalResponses}
      </Card.Description>
      <Card.Description>
      Question Created by: {props.createdBy}
      </Card.Description>
        <Link to={`/posts/${props.id}`}>
        <Button>
        Open
        </Button>
        </Link>
      </Card.Content>
    </Card>
  </div>
)
  

export default Box;