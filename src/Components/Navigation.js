import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import { useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
} from "reactstrap";

import TheContext from "./../TheContext";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);

  const changeUsername = (e) => {
    setUserName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const { showFlashMessage, isLoggedIn, lin, lout } = useContext(TheContext);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === true) {
      lin();
    }
  });

  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ fontSize: "2.3rem" }}>
          Get Graphs
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    textDecoration: "none",

                    color: pathname === "/BarChart" ? "blue" : "gray",
                    fontSize: "1.5rem",
                  }}
                  to="/BarChart"
                >
                  {" "}
                  Bar Chart
                </Link>
              </NavLink>{" "}
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    textDecoration: "none",
                    color: pathname === "/LineChart" ? "blue" : "gray",
                    fontSize: "1.5rem",
                  }}
                  to="/LineChart"
                >
                  {" "}
                  Line Chart
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    textDecoration: "none",
                    color: pathname === "/RadarChart" ? "blue" : "gray",
                    fontSize: "1.5rem",
                  }}
                  to="/RadarChart"
                >
                  {" "}
                  Radar Chart
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    textDecoration: "none",
                    color: pathname === "/PieChart" ? "blue" : "gray",
                    fontSize: "1.5rem",
                  }}
                  to="/PieChart"
                >
                  {" "}
                  Pie Chart
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
