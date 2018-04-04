import React, { Component } from 'react';
import './Header.css';
import { Card, Icon, Image, Form, TextArea, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const colors = {
	blue: "#6da0f2",
	white: "#ffffff"
}

const myStyles = {
	backgroundColor: colors.blue,
	Color: colors.white,
}

const BigHeader = () => (
 <div style={myStyles}>
  <Segment color={colors.blue}>
    <Header as='h3' textAlign='center' color={colors.blue}>
    Information Premium
    </Header>
  </Segment>
 </div>
)

export default BigHeader