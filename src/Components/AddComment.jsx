import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   readersComment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: null,
  //   },
  // };

  const [readersComment, setreadersComments] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

  useEffect(() => {
    setreadersComments({
      ...readersComment,
      elementId: props.asin,
    });
  }, [props.asin]);

  // componentDidUpdate(PrevProps) {
  //   if (PrevProps.asin !== this.props.asin) {
  //     this.setState({
  //       readersComment: {
  //         ...this.state.readersComment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  const sendComments = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          // body: JSON.stringify(this.state.readersComment),
          body: JSON.stringify(readersComment),
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

  return (
    <Form onSubmit={sendComments}>
      <Form.Group>
        <Form.Label>Comments</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add a comment"
          // value={this.state.readersComment.comment}
          value={readersComment.comment}
          // onChange={(e) =>
          //   this.setState({
          //     readersComment: {
          //       ...this.state.readersComment,
          //       comment: e.target.value,
          //     },
          //   })
          // }
          onChange={(e) =>
            setreadersComments({
              ...readersComment,
              comment: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rate</Form.Label>
        <Form.Control
          as="select"
          value={readersComment.rate}
          // onChange={(e) =>
          //   this.setState({
          //     readersComment: {
          //       ...this.state.readersComment,
          //       rate: e.target.value,
          //     },
          //   })
          // }
          onChange={(e) =>
            setreadersComments({
              ...readersComment,
              rate: e.target.value,
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
};

export default AddComment;
