import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <Link className="navbar-brand" to="/">
          Resort Beach
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Hotel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Link to="/signin">
            <Button
              outline
              color="primary"
              className="mr-2"
              style={{ border: "white" }}
            >
              Đăng nhập
            </Button>
          </Link>
          <Link to="/signup">
            <Button outline size="lg" color="primary">
              Tạo tài khoản
            </Button>
          </Link>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
