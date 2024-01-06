import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="ShopVibe" />
            ShopVibe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>

            <Nav.Link href="/login">
              <FaUser /> Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
