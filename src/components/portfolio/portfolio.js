import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import MyCard from './card';

import './../styles.css'

function Portfolio(props) {
    var works = [
        {
            name:"Berenice From Capadoccia",
            picture:"eng/Berenice.png"
        },
        {
            name:"The Flying Carpet",
            picture:"eng/carpet.jpg"
        },
        {
            name:"Cordel for the Little Ones",
            picture:"eng/cordel1.jpg"
        },
        {
            name:"Cordel for the Little Ones Part 2",
            picture:"eng/cordel_2_.jpg"
        },
        {
            name:"The Boy who lost Magic",
            picture:"eng/magic.jpg"
        },
        {
            name:"The Photographer",
            picture:"eng/photographer.webp"
        },
        {
            name:"While I am still waiting",
            picture:"eng/waiting.jpg"
        },
        {
            name:"100 Facts Space",
            picture:"pt/100_facts.jpg"
        },
        {
            name:"Ella Diaries",
            picture:"pt/ella.jpg"
        },
        {
            name:"The Ghost in the Attic",
            picture:"pt/ghost_in_the_attic.jpg"
        },
        {
            name:"The Haunted Library",
            picture:"pt/haunted_library.jpg"
        },
        {
            name:"100 Facts Human Body",
            picture:"pt/human_body.jpg"
        },
        {
            name:"Você conhece Jesus?",
            picture:"pt/jesus.webp"
        },
        {
            name:"Números de azar",
            picture:"pt/numeros_de_azar.jpg"
        },
        {
            name:"Meu Peixe Zumbi",
            picture:"pt/peixe_zumbi.jpg"
        },
        {
            name:"The Power of One",
            picture:"pt/power.jpg"
        },
        {
            name:"R",
            picture:"pt/r.webp"
        },
        {
            name:"100 Facts Rainforests",
            picture:"pt/rainforest.jpg"
        },
        {
            name:"S",
            picture:"pt/S.jpg"
        }
    ];

    return (
        <Container>
            <Row>
                {
                    works.map(work => 
                        <Col xs={12} lg={4} className="my-3">
                            <MyCard name={work.name} picture={work.picture} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default Portfolio;