import { Nav, Navbar, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="teste"
    >
      <Container>
        <div>
          <Link to="/" className="navbar-brand ">
            BuchechaBarber
          </Link>
          <a href="https://google.com">
            <FaFacebook className="text-light me-1" />
          </a>
          <a href="https://google.com">
            <FaInstagram className="text-light" />
          </a>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Link to="/horarios" className="nav-link text-light">
                Horarios
              </Link>
            </Nav.Link>

            <Nav.Link href="/">
              <Link to="/agendamentos" className="nav-link text-light">
                Agendamentos
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
