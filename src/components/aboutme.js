import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './styles.css'

function AboutMe() {
    const photo = require(`./../img/aboutme/photo.jpeg`);
    const saoPaulo = require(`./../img/aboutme/saopaulo.jpeg`);
    const teacher = require(`./../img/aboutme/teacher.jpeg`);
    const interpret = require(`./../img/aboutme/interpret2b.jpeg`);
    const book = require(`./../img/aboutme/book.jpeg`);
    const games = require(`./../img/aboutme/games.jpeg`);
    return (
        <div fluid>
            <Container className="mt-3 text-center justify-content-center text-align-center">
                <h1>About Me</h1>
                <Image className="photoImage" src={photo} />
            </Container>
            <Container className="mt-3 text-center justify-content-center text-align-center">
                <h2>Hello! I’m Amarilis and I’m a translator and a proofreader.</h2>
                <h3>I’m glad you came here to meet me!</h3>
            </Container>
            <Container className="mt-5">
                <Container className="text-center justify-content-center text-align-center mb-2">
                    <Image className="SpImage" src={saoPaulo} />
                </Container>
            <p>I was born in São Paulo City, one of Latin America's most important trade centers in commerce, finance, arts and entertainment.<br></br>
            Also, the city has always welcomed people from all regions in Brazil as well as nations from all over the world, such personal feature developed a multiethnicity environment and provided a cultural pluralism view in its inhabitants.<br></br>
            Thus, being raised in a place remarked by a diversity of traditions and cultures inspired me to learn about languages and their curiosities.</p>
            </Container>
            <Container className="mt-3">
                <h3>Yes, I chose to be a translator!</h3>
            </Container>
            <Container className="mt-3">
            <p>I had already decided I would be a translator, therefore, I graduated in <strong>Translation and Interpretation</strong> from São Judas Tadeu University; later, I achieved a Specialization degree in English Composition and in Creative Writing.</p>
            </Container>

            <Container className="mt-5 text-center justify-content-center text-align-center">
                <h2>Professional background is essential</h2>
                <Image className="" src={teacher} />
            </Container>
            <Container className="mt-3">
                <p>When I was fifteen, the owner of the language school where I had studied invited me to teach English there, and a whole new world was ahead of me!<br></br>
                Teaching something means learning even more about a bunch of other subjects, especially <strong>Education</strong>. In addition to that, being a teacher in companies put me in touch with areas regarding <strong>Business Management, Marketing and Human Resources</strong>.<br></br>
                Soon after I finished college, I moved to the South of Brazil and became the Pedagogical Coordinator of other language schools. This experience allowed me to put into practice all previous management skills I had developed.<br></br>
                Along with the pedagogical coordination, I gave my first steps in the translation field by <strong>localizing companies’ websites, folders, cards, guides</strong> and other related materials.</p>
            </Container>

            <Container className="mt-5 text-center justify-content-center text-align-center">
                <h2>It wasn't enough</h2>
                <Image className="SpImage" src={book} />
            </Container>
            <Container className="mt-3">
                <p>I had already been translating texts for different purposes and clients for almost ten years; however, I had a dream which was high time to pursue: I wanted <strong>to translate literature</strong>. So, I went for it, and, in 2013, I translated my first tale: <strong>The Three Strangers</strong>, by <strong>Thomas Hardy</strong>, published in a book of short stories, by Arte e Letra. Since then, I have translated a considerable number of fiction and non-fiction books; on top of that, translating a story about <strong>Jane Austen</strong> was certainly an utmost accomplishment personally and professionally.</p>
            </Container>

            <Container className="mt-5 text-center justify-content-center text-align-center">
                <h2>It’s never enough</h2>
                <Image className="interpretImage" src={interpret} />
            </Container>
            <Container className="mt-3">
                <p>In 2017, I was given the chance to unite both passions: translation and teaching, since Interpret2b (I2b), a foremost Translation and Interpretation School in Brazil, invited me to teach <strong>Literary Translation</strong> to students and future colleagues. Things went so well that in 2019, I became I2b’s Translation Pedagogical Coordinator. Currently, I have successfully done both activities there and achieved great results along with the Translation team. </p>
                <p>For more information about Interpret2b, please go to <a href="http://www.interpret2b.com/">interpret2b.com</a>.</p>
            </Container>

            <Container className="mt-5 text-center justify-content-center text-align-center">
                <h2>Another unexpected but welcome invitation</h2>
                <Image className="" src={games} />
            </Container>
            <Container className="mt-3">
                <p>In 2020, due to the Covid-19 pandemic, the games’ market faced the urge to develop and launch new titles quickly and massively as people remained locked in their homes and needed to feed old hobbies or to find new pleasures to have some fun. It was when I received a request to work as a <strong>proofreader</strong> for an agency whose specialty is the <strong>translation of games and comics</strong>. What a great journey it has been to work with such entertainment!</p>
            </Container>
            <Container className="mt-5 mb-5 text-center justify-content-center text-align-center">
                <h4>Now that you know me, it would be a pleasure to work on your project! Send me a message, please.</h4>
                <Button className="mt-2" variant="dark" size="lg">Contact Me</Button>
            </Container>
        </div>
  );
}

export default AboutMe;