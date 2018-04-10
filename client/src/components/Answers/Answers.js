import React from 'react';
// import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { Comment } from 'semantic-ui-react';

const Answers = (props) => (

    <Comment>
      {/* <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' /> */}
      <Comment.Content>
        <Comment.Author as='a'>{props.createdBy}</Comment.Author>
        <Comment.Metadata>
          <div>{props.createdOn}</div>
        </Comment.Metadata>
        <Comment.Text>{props.answerText}</Comment.Text>
      </Comment.Content>
    </Comment>

   


)

export default Answers;