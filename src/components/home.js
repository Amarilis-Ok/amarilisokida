import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import { US, BR, GB } from 'country-flag-icons/react/3x2'
import Button from 'react-bootstrap/Button';

import './styles.css'

function Home(props) {
    const img = require(`./../img/Amarilis_logo_final__area_entorno.jpg`);
    if (props.inEnglish) {
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
                    <Button onClick={props.onClick} className="mt-2" variant="dark" size="lg">Contact Me</Button>
                </Container>
            </div>
        );
    }
    else {
        return (
            <div fluid>
                <Container fluid className="jumboTron">
                    <Image src={img} />
                </Container>
                <Container className={"mt-4 mb-4 text-center"} fluid>
                    <h1>Amarilis Okida</h1>
                    <h4>Tradutora e revisora</h4>
                    <h4><BR className="iconSizeHome" /> <HiChevronLeft className="iconSizeHome" /><HiChevronRight className="iconSizeHome" /> <US className="iconSizeHome" /> <GB className="iconSizeHome" /></h4>
                </Container>
                <Container className={"mb-3 text-center"} fluid>
                    <h2>Você tem histórias,<br/>
                    eu encontrarei as palavras certas para contá-las.</h2>
                </Container>
                <Container className={"mb-4 text-center"} fluid>
                    <p>Traduzir não é o mero transporte de palavras de uma língua para outra; é promover uma experiência cultural completa.<br />
                        Você deseja ver os falantes de inglês indo além do que é dito. Você deseja que eles sintam, experimentem e visualizem as suas ideias.<br />
                        Eu proporcionarei isso a eles.</p>
                </Container>
                <Container className={"mb-3 text-center"} fluid>
                    <h2>O que eu faço</h2>
                </Container>
                <Container className={"mb-4 text-center"} fluid>
                    <p>
                    Você montou uma empresa, desenvolveu produtos e serviços extraordinários e investiu na divulgação; eu tenho certeza de que você quer manter a qualidade ao apresentar sua marca aonde for. <br />
                    Como especialista em contar histórias, ajudarei você a adaptar sua apresentação de modo que tivesse sido originalmente escrita em inglês, considerando o conteúdo idealizado e a cultura do público-alvo.
                    </p>
                    <Button onClick={props.onClick} className="mt-2" variant="dark" size="lg">Contato</Button>
                </Container>
            </div>
        );
    }
}

export default Home;