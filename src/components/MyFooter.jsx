import { Container,Row, Col } from "react-bootstrap";
const MyFooter = function () {
  return (
    <Container className="bg-primary text-white py-4 border border-1 border-white">
      <Row>
        <Col md={12} className="mb-3 mb-md-0">
          <p className="mb-0 text-center">
           EpiBooks
          </p>
        </Col>
        <Col md={0} className="text-center">
          <a href="/privacy" className="text-white text-decoration-none me-3">
            Dove trovarci
          </a>
          <a href="/privacy" className="text-white text-decoration-none me-3">
            Privacy
          </a>
          <a href="/terms" className="text-white text-decoration-none me-3">
            Termini di Servizio
          </a>
          <a href="/contact" className="text-white text-decoration-none">
            Contattaci
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
