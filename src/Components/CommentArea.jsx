import React, { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    defaultComments: [],
    isLoading: true,
    isError: false,
  };

  componentDidUpdate = async (PrevProps) => {
    if (PrevProps.asin !== this.props.asin) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
            },
          }
        );

        if (response.ok) {
          let comments = await response.json();
          this.setState({
            defaultComments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          console.log("response not ok");
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentsList comments={this.state.defaultComments} />
        <AddComment asin={this.props.asin} />
        {}
      </div>
    );
  }
}

export default CommentArea;
