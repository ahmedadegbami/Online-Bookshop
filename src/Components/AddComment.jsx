import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    readersComment: {
      comment: "",
      rate: 1,
      elementId: null,
    },
  };

  componentDidUpdate(PrevProps) {
    if (PrevProps.asin !== this.props.asin) {
      this.setState({
        readersComment: {
          ...this.state.readersComment,
          elementId: this.props.asin,
        },
      });
    }
  }

  sendComments = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.readersComment),
          headers: {
            "Content-type": "application/json",
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
      <Form onSubmit={this.sendComments}>
        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a comment"
            value={this.state.readersComment.comment}
            onChange={(e) =>
              this.setState({
                readersComment: {
                  ...this.state.readersComment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            value={this.state.readersComment.rate}
            onChange={(e) =>
              this.setState({
                readersComment: {
                  ...this.state.readersComment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
