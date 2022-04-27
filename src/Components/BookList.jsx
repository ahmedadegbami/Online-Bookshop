import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search Book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="what book are you looking for?"
                  // value={this.state.searchQuery}
                  value={searchQuery}
                  // onChange={(e) =>
                  //   this.setState({
                  //     searchQuery: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={3}>
                  <SingleBook
                    book={b}
                    // changeSelectedBook={(asin) =>
                    //   this.setState({
                    //     selectedBook: asin,
                    //   })
                    // }
                    changeSelectedBook={(asin) => setSelectedBook(asin)}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          {/* <CommentArea asin={this.state.selectedBook} /> */}
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
