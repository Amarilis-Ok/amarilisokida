import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineHome, MdOutlineInfo } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri"
import { BsJournalText } from "react-icons/bs"
import { US, BR, GB } from 'country-flag-icons/react/3x2'

import './navbar.css'

function NavBarMain() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Amarilis Okida</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="pe-3" href="#action1">Home <MdOutlineHome /></Nav.Link>
                <Nav.Link className="pe-3" href="#action2">About me <MdOutlineInfo /></Nav.Link>
                <Nav.Link className="pe-3" href="#action2">Portfolio <BiBook /></Nav.Link>
                <Nav.Link className="pe-3" href="#action2">Contact <RiContactsBook2Line /></Nav.Link>
                <Nav.Link className="pe-3" href="#action2">Blog <BsJournalText /></Nav.Link>
                <NavDropdown
                title="Language"
                >
                    <NavDropdown.Item href="#action3">
                        English <US className="flagSize" /> <GB className="flagSize" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Portuguese <BR className="flagSize" />
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMain;