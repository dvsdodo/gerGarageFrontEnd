import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

function Menu(args) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
  };

  const handleVehicle = () => {
    navigate("/vehicle");
  };

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <div>
      <Navbar color="dark" dark expand="mid">
        <NavbarBrand href="/">Ger's Garage</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink onClick={handleBooking}>New Booking</NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={handleVehicle}>New Vehicle</NavLink>
            </NavItem>

            <NavItem>
              <Button color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;