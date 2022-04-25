import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

class SingleComment extends Component {
  deleteComments = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
          },
        }
      );

      if (response.ok) {
        console.log(response);
      } else {
        console.log("response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ListGroup className="d-flex">
        <ListGroup.Item className="text-dark">
          {this.props.comment.comment}
          <Button
            variant="danger"
            className="float-right"
            onClick={() => this.deleteComments(this.props.comment._id)}
          >
            <i class="bi bi-trash3-fill"></i>
          </Button>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default SingleComment;
