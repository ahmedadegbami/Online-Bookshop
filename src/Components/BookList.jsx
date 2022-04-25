import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React, { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
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
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
