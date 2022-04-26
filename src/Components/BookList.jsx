import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React, { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };
  render() {
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
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({
                        searchQuery: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={3}>
                    <SingleBook
                      book={b}
                      changeSelectedBook={(asin) =>
                        this.setState({
                          selectedBook: asin,
                        })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
