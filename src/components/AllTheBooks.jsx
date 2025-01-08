import books from '../data/history.json'
import { Card, Container, Row, Col } from 'react-bootstrap';
const AllTheBooks = function () {
    return (
        <Container className="mt-4">
            <Row>
                {books.map((book, i) => (
                    <Col xs={6} lg={3} key={i} className="mb-4">
                        <Card className='p-1 border-2 border-muted rounded-2 h-100'>
                            <Card.Img src={book.img} alt={book.title} className='h-100' />
                            <Card.Body>
                                <Card.Title className='text-truncate text-primary'>{book.title}</Card.Title>
                                <Card.Text className='text-primary'>
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
