import { Container, Navbar, Nav} from "react-bootstrap"

const MyNav = function() {
    return (
        <Navbar collapseOnSelect expand="md" bg='primary' data-bs-theme='primary' >
        <Container fluid={true}>
          <Navbar.Brand href="#home" className="text-white fw-bold">EPIBOOKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="text-white">Home</Nav.Link>
              <Nav.Link href="#pricing" className="text-white">About</Nav.Link>
              <Nav.Link href="#pricing"className="text-white">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) 
}
export default MyNav
