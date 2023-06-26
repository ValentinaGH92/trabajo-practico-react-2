import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import PizzaIcon from "../../svg/pizza-slice.svg";
import { Image } from "react-bootstrap";
import CartIcon from "./CartIcon";

const NavPrincipal = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={PizzaIcon} width="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="/products">
              Products
            </Link>
          </Nav>

          <CartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPrincipal;
