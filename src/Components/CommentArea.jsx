import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  // state = {
  //   defaultComments: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const [defaultComments, setDefaultComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getComments();
  }, [props.asin]);

  const getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
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
        // this.setState({
        //   defaultComments: comments,
        //   isLoading: false,
        //   isError: false,
        // });
        setDefaultComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("response not ok");
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ isLoading: false, isError: true });
      setIsLoading(false);
      setIsError(true);
    }
  };

  // componentDidUpdate = async (PrevProps) => {
  //   if (PrevProps.asin !== this.props.asin) {
  //     // try {
  //     //   let response = await fetch(
  //     //     "https://striveschool-api.herokuapp.com/api/comments/" +
  //     //       this.props.asin,
  //     //     {
  //     //       method: "GET",
  //     //       headers: {
  //     //         Authorization:
  //     //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
  //     //       },
  //     //     }
  //     //   );

  //     //   if (response.ok) {
  //     //     let comments = await response.json();
  //     //     this.setState({
  //     //       defaultComments: comments,
  //     //       isLoading: false,
  //     //       isError: false,
  //     //     });
  //     //   } else {
  //     //     console.log("response not ok");
  //     //     this.setState({ isLoading: false, isError: true });
  //     //   }
  //     // } catch (error) {
  //     //   console.log(error);
  //     //   this.setState({ isLoading: false, isError: true });
  //     // }
  //   }

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <CommentsList comments={defaultComments} />
      <AddComment asin={props.asin} />
      {}
    </div>
  );
};

export default CommentArea;
