import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import { US, BR, GB } from 'country-flag-icons/react/3x2'
import Button from 'react-bootstrap/Button';

import './styles.css'

function Home() {
    const img = require(`./../img/Amarilis_logo_final__area_entorno.jpg`);
    return (
        <div fluid>
            <Container fluid className="jumboTron">
                <Image src={img} />
            </Container>
            <Container className={"mt-4 mb-4 text-center"} fluid>
                <h1>Amarilis Okida</h1>
                <h4>Translator and Proofreader</h4>
                <h4><US className="iconSizeHome" /> <GB className="iconSizeHome" /> <HiChevronLeft className="iconSizeHome" /><HiChevronRight className="iconSizeHome" /> <BR className="iconSizeHome" /></h4>
            </Container>
            <Container className={"mb-3 text-center"} fluid>
                <h2>You have stories to tell,<br/>
                I’ll help you put them in the right words.</h2>
            </Container>
            <Container className={"mb-4 text-center"} fluid>
                <p>Translating is not simply transporting words from one language to another; it is promoting a whole cultural experience.<br />
                    You want Brazilian people to go beyond what is said. You want them to feel, taste and visualize your ideas.<br />
                    I will make it possible for them.</p>
            </Container>
            <Container className={"mb-3 text-center"} fluid>
                <h2>What do I do</h2>
            </Container>
            <Container className={"mb-4 text-center"} fluid>
                <p>
                You developed a company, came up with outstanding products or services and invested in nice materials to show them, and I am sure you want to keep quality to introduce your brand wherever you go. <br />
                Being an expert in storytelling, I will help you adapt your presentation as if it had originally been written in Brazilian Portuguese, taking into account what is in your mind and our local culture.
                </p>
                <Button className="mt-2" variant="dark" size="lg">Contact Me</Button>
            </Container>
        </div>
  );
}

export default Home;