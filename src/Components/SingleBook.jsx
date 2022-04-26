import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };
  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            // value={this.state.selected}
            // onClick={() =>
            //   this.setState({
            //     selected: !this.state.selected,
            //   })
            onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
            // style={{ border: this.state.selected ? "2px solid red " : "none" }}
          />
          <Card.Body>
            <Card.Title className="text-dark">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>

        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    );
  }
}

export default SingleBook;
