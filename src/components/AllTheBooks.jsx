import books from '../data/history.json'
import { Card, Container, Row, Col } from 'react-bootstrap';
const AllTheBooks = function () {
    return (
        <Container className="mt-4">
            <Row>
                {books.map((book, i) => (
                    <Col xs={12} lg={3} key={i} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={book.img} alt={book.title} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    Prezzo: €{book.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


   


export default AllTheBooks;
