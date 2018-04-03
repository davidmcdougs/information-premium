import React, { Component } from 'react';
import './Search.css';
import { Card, Icon, Image, Form, TextArea, Button, Header, Segment, Search, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Searchbar = () => (
  <Grid>
    <Grid.Column width={8}>
      <Search/>
    </Grid.Column>
  </Grid>
)

export default Searchbar