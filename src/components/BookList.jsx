/* eslint-disable react/prop-types */

import SingleBook from './SingleBook';
import { Row, Col } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book} sm={12} md={6} lg={4}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
