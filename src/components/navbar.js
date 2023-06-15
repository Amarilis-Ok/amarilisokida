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

import './styles.css'

function NavBarMain(props) {
  if (props.inEnglish) {
    return (
      <Navbar className="p-3" bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="titleHover" onClick={() => props.pageFunc(0)}>Amarilis Okida</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => props.pageFunc(0)} className="pe-3">Home <MdOutlineHome /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(1)} className="pe-3">About me <MdOutlineInfo /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(3)} className="pe-3">Portfolio <BiBook /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(2)} className="pe-3">Contact <RiContactsBook2Line /></Nav.Link>
                  <Nav.Link onClick={() => alert('Under construction!')} className="pe-3">Blog <BsJournalText /></Nav.Link>
                  <NavDropdown
                  title="Language"
                  >
                      <NavDropdown.Item onClick={() => props.langFunc(true)}>
                          English <US className="flagSize" /> <GB className="flagSize" />
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => props.langFunc(false)}>
                          Portuguese <BR className="flagSize" />
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  else {
    return (
      <Navbar className="p-3" bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => props.pageFunc(0)}>Amarilis Okida</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => props.pageFunc(0)} className="pe-3">Página principal <MdOutlineHome /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(1)} className="pe-3">Sobre mim <MdOutlineInfo /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(3)} className="pe-3">Portfólio <BiBook /></Nav.Link>
                  <Nav.Link onClick={() => props.pageFunc(2)} className="pe-3">Contato <RiContactsBook2Line /></Nav.Link>
                  <Nav.Link onClick={() => alert('Em construção!')} className="pe-3">Blog <BsJournalText /></Nav.Link>
                  <NavDropdown
                  title="Idioma"
                  >
                      <NavDropdown.Item onClick={() => props.langFunc(true)}>
                          Inglês <US className="flagSize" /> <GB className="flagSize" />
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => props.langFunc(false)}>
                          Português <BR className="flagSize" />
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBarMain;