import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="md">
        <NavbarBrand href="/">Typecheck</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="https://github.com/IsraaBeseiso/typing-test-.git"
                target="_blank"
              >
                GitHub Repository
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./RegisterForm">Login/Register</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Dashboard</DropdownItem>
                <DropdownItem>Login</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Welcome!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
