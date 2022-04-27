import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={props.book.img}
          // value={this.state.selected}
          // onClick={() =>
          //   this.setState({
          //     selected: !this.state.selected,
          //   })
          onClick={() => props.changeSelectedBook(props.book.asin)}
          // style={{ border: this.state.selected ? "2px solid red " : "none" }}
        />
        <Card.Body>
          <Card.Title className="text-dark">{props.book.title}</Card.Title>
        </Card.Body>
      </Card>

      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
