/* eslint-disable react/prop-types */
import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";

const BookList = ({ books }) => {

  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Cerca nella libreria"
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-3"
      />
      
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book} sm={6} md={2} lg={2} className="mb-2">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

