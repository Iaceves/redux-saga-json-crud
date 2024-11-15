import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "10px" }}>
              <MDBIcon fas icon="book-open" />
            </span>
            Contact
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
            className="text-white"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/addUser" className="nav-link text-white">
                  AddUser
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/about" className="nav-link text-white">
                  About
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
