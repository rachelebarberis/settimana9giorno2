/* eslint-disable react/prop-types */

import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container >
      <Row>
        {books.map((book) => (
          <Col key={book} sm={6} md={2} lg={2} className="mb-2">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
