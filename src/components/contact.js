import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineClockCircle } from 'react-icons/ai'

import './styles.css'

function Contact(props) {
    const seal = require(`./../img/contacts/selo.jpeg`);
    if (props.inEnglish) {
        return (
            <div fluid>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h1>Contact Me</h1>
                </Container>
                <Container fluid="sm" className="mt-5 mb-2 text-center justify-content-center text-align-center">
                    <Row>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Email <AiOutlineMail /></h3>
                            <a className="linkColor" href="mailto:amarilisokida@gmail.com">amarilisokida@gmail.com</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Instagram <AiOutlineInstagram /></h3>
                            <a className="linkColor" href="https://www.instagram.com/amarilis_okida_tradutora/">@amarilis_okida_tradutora</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>LinkedIn <AiOutlineLinkedin /></h3>
                            <a className="linkColor" href="https://www.linkedin.com/in/amarilis-okida/">Amarilis Okida</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Time Zone <AiOutlineClockCircle /></h3>
                            <a>Brasilia Standard Time, UTC-3</a>
                        </Col>
                    </Row>
                </Container>
                <Container className="text-center justify-content-center text-align-center">
                    <Image className="sealImage pb-3" src={seal} />
                </Container>
            </div>
        );
    }
    else {
        return (
            <div fluid>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h1>Contato</h1>
                </Container>
                <Container fluid="sm" className="mt-5 mb-2 text-center justify-content-center text-align-center">
                    <Row>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Email <AiOutlineMail /></h3>
                            <a className="linkColor" href="mailto:amarilisokida@gmail.com">amarilisokida@gmail.com</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Instagram <AiOutlineInstagram /></h3>
                            <a className="linkColor" href="https://www.instagram.com/amarilis_okida_tradutora/">@amarilis_okida_tradutora</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>LinkedIn <AiOutlineLinkedin /></h3>
                            <a className="linkColor" href="https://www.linkedin.com/in/amarilis-okida/">Amarilis Okida</a>
                        </Col>
                        <Col className="pb-5" xs={12} lg={3}>
                            <h3>Fuso Horário <AiOutlineClockCircle /></h3>
                            <a>Horário Padrão de Brasília, UTC-3</a>
                        </Col>
                    </Row>
                </Container>
                <Container className="text-center justify-content-center text-align-center">
                    <Image className="sealImage pb-3" src={seal} />
                </Container>
            </div>
        );
    }
}

export default Contact;