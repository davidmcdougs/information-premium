import React, { Component } from 'react';
import './Header.css';
import { Card, Icon, Image, Form, TextArea, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const BigHeader = () => (
  <Segment>
    <Header as='h3' textAlign='center'>
    Information Premium
    </Header>
  </Segment>
)

export default BigHeader