import React, { Component } from 'react';
import './Box.css';
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const Box = () => (
  <div className="col-sm-12 col-md-6 col-lg-3">
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
        <Link to="/posts/example">
        <Button>
        Open
        </Button>
        </Link>
      </Card.Content>
    </Card>
  </div>
)
  

export default Box;