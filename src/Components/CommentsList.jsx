import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <div>
        <ListGroup className="text-dark">
          {this.props.comments.map((comment) => (
            <SingleComment comment={comment} />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentsList;
