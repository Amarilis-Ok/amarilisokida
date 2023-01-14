import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineClockCircle } from 'react-icons/ai'

import './styles.css'

function Contact() {
    return (
        <div fluid>
            <Container className="mt-3 text-center justify-content-center text-align-center">
                <h1>Contact Me</h1>
            </Container>
            <Container fluid="sm" className="mt-5 mb-5 text-center justify-content-center text-align-center">
                <Row>
                    <Col className="pb-5" xs={12} lg={3}>
                        <h3>Email <AiOutlineMail /></h3>
                        <a className="linkColor" href="mailto:hello@amarilisokida.com.br">hello@amarilisokida.com.br</a>
                    </Col>
                    <Col className="pb-5" xs={12} lg={3}>
                        <h3>Instagram <AiOutlineInstagram /></h3>
                        <a className="linkColor" href="https://www.instagram.com/amarilis_okida/">@amarilis_okida</a>
                    </Col>
                    <Col className="pb-5" xs={12} lg={3}>
                        <h3>LinkedIn <AiOutlineLinkedin /></h3>
                        <a className="linkColor" href="https://www.linkedin.com/in/amarilis-okida/">Amarilis Okida</a>
                    </Col>
                    <Col className="pb-5" xs={12} lg={3}>
                        <h3>Time Zone <AiOutlineClockCircle /></h3>
                        <a>Brasilia Standard Time, GMT-3</a>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Contact;