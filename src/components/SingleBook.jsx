/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
   
       
          <Card className="p-1 border-2 border-muted rounded-2 h-100">
            <Card.Img
              variant="top"
              src={book.img}
              alt={book.title}
              className="h-100"
            />
            <Card.Body>
              <Card.Title className="text-center text-truncate">
                {book.title}
              </Card.Title>
            </Card.Body>
          </Card>
  );
};

export default SingleBook;
