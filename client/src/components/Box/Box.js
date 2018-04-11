import React, { Component } from 'react';
import './Box.css';
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const Box = (props) => (
  <div className="col-sm-6 col-md-4 col-lg-3 fixed-height prettycards">
    <Card className="zoom">
       <Link to={`/posts/${props.id}`}>
        <Card.Content>
          <Card.Header>
            {props.question}
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
           <Card.Description className="center">
          {props.createdBy 
            ? `Composed By: ${props.createdBy}`
            : ""
          }
        </Card.Description>
          <Card.Description className="center">
            Topic: {props.topic}
          </Card.Description>
          <Card.Description>
            {props.reward 
              ?  "Reward: ${props.reward}"
              : ""
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Card.Description className="center">
          {props.totalResponses.length > 0
            ? `answers: ${props.totalResponses}`
            : "Be the first to answer this one!"
          }
        </Card.Description>
        </Card.Content>
      </Link>
    </Card>
  </div>
)
  

export default Box;