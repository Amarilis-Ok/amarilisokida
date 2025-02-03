import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './styles.css'

function AboutMe(props) {
    const photo = require(`./../img/aboutme/photo.jpeg`);
    const saoPaulo = require(`./../img/aboutme/saopaulo.jpeg`);
    const teacher = require(`./../img/aboutme/teacher.jpeg`);
    const interpret = require(`./../img/aboutme/interpret2b.jpeg`);
    const book = require(`./../img/aboutme/book.jpeg`);
    const games = require(`./../img/aboutme/games.jpeg`);

    if (props.inEnglish) {
        return (
            <div fluid>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h1>About Me</h1>
                    <Image fluid className="photoImage" src={photo} />
                </Container>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h2>Hello! I’m Amarilis and I’m a translator and a proofreader.</h2>
                    <h3>I’m glad you came here to meet me!</h3>
                </Container>
                <Container className="mt-5">
                    <Container className="text-center justify-content-center text-align-center mb-2">
                        <Image fluid className="SpImage" src={saoPaulo} />
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
                    <Image fluid className="" src={teacher} />
                </Container>
                <Container className="mt-3">
                    <p>When I was fifteen, the owner of the language school where I had studied invited me to teach English there, and a whole new world was ahead of me!<br></br>
                    Teaching something means learning even more about a bunch of other subjects, especially <strong>Education</strong>. In addition to that, being a teacher in companies put me in touch with areas regarding <strong>Business Management, Marketing and Human Resources</strong>.<br></br>
                    Soon after I finished college, I moved to the South of Brazil and became the Pedagogical Coordinator of other language schools. This experience allowed me to put into practice all previous management skills I had developed.<br></br>
                    Along with the pedagogical coordination, I gave my first steps in the translation field by <strong>localizing companies’ websites, folders, cards, guides</strong> and other related materials.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>It wasn't enough</h2>
                    <Image fluid className="SpImage" src={book} />
                </Container>
                <Container className="mt-3">
                    <p>I had already been translating texts for different purposes and clients for almost ten years; however, I had a dream which was high time to pursue: I wanted <strong>to translate literature</strong>. So, I went for it, and, in 2013, I translated my first tale: <strong>The Three Strangers</strong>, by <strong>Thomas Hardy</strong>, published in a book of short stories, by Arte e Letra. Since then, I have translated a considerable number of fiction and non-fiction books; on top of that, translating a story about <strong>Jane Austen</strong> was certainly an utmost accomplishment personally and professionally.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>It’s never enough</h2>
                    <Image fluid className="interpretImage" src={interpret} />
                </Container>
                <Container className="mt-3">
                    <p>In 2017, I was given the chance to unite both passions: translation and teaching, since Interpret2b (I2b), a foremost Translation and Interpretation School in Brazil, invited me to teach <strong>Literary Translation</strong> to students and future colleagues. Things went so well that in 2019, I became I2b’s Translation Pedagogical Coordinator. Currently, I have successfully done both activities there and achieved great results along with the Translation team. </p>
                    <p>For more information about Interpret2b, please go to <a href="http://www.interpret2b.com/">interpret2b.com</a>.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>Another unexpected but welcome invitation</h2>
                    <Image fluid className="" src={games} />
                </Container>
                <Container className="mt-3">
                    <p>In 2020, due to the Covid-19 pandemic, the games’ market faced the urge to develop and launch new titles quickly and massively as people remained locked in their homes and needed to feed old hobbies or to find new pleasures to have some fun. It was when I received a request to work as a <strong>proofreader</strong> for an agency whose specialty is the <strong>translation of games and comics</strong>. What a great journey it has been to work with such entertainment!</p>
                </Container>
                <Container className="mt-5 mb-5 text-center justify-content-center text-align-center">
                    <h4>Now that you know me, it would be a pleasure to work on your project! Send me a message, please.</h4>
                    <Button onClick={props.onClick} className="mt-2" variant="dark" size="lg">Contact Me</Button>
                </Container>
            </div>
        );
    }
    else {
        return (
            <div fluid>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h1>Sobre mim</h1>
                    <Image fluid className="photoImage" src={photo} />
                </Container>
                <Container className="mt-3 text-center justify-content-center text-align-center">
                    <h2>Olá! Meu nome é Amarilis e eu sou tradutora e revisora textual.</h2>
                    <h3>É um prazer conhecer você!</h3>
                </Container>
                <Container className="mt-5">
                    <Container className="text-center justify-content-center text-align-center mb-2">
                        <Image fluid className="SpImage" src={saoPaulo} />
                    </Container>
                <p>Nasci em São Paulo, um dos centros comerciais mais importantes da América Latina em matéria de negócios, finanças, arte e entretenimento.<br></br>
                Além disso, a cidade sempre acolheu pessoas de todas as regiões do Brasil, bem como de nações do mundo inteiro. Tal peculiaridade proporcionou um ambiente de multietnicidade, que fez os habitantes desenvolverem um senso de pluralidade cultural.<br></br>
                Assim, o fato de ter crescido num lugar onde aflorava a diversidade de tradições e culturas me inspirou a aprender línguas estrangeiras e as curiosidades que as envolvem.</p>
                </Container>
                <Container className="mt-3">
                    <h3>Sim, eu escolhi ser tradutora!</h3>
                </Container>
                <Container className="mt-3">
                <p>Decidida a me tornar tradutora, fiz a graduação em <strong>Tradutor e Intérprete</strong> (Universidade São Judas Tadeu), mais tarde, especializei-me em Composição em língua inglesa (Duke University) e em Escrita criativa (San Jacinto College).</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>Experiência é essencial</h2>
                    <Image fluid src={teacher} />
                </Container>
                <Container className="mt-3">
                    <p>Quando eu tinha quinze anos de idade, a proprietária do curso de idiomas, onde estudei, convidou-me para lecionar inglês, e um mundo novo se abriu para mim!<br></br>
                    Ensinar significa aprender infinitamente a respeito de vários assuntos, sobretudo <strong>Educação</strong>. Mais além, ser professora em empresas me fez ter contato com diversas áreas, tais como: <strong>Administração, Marketing e Recursos Humanos</strong>.<br></br>
                    Tão logo me formei, fui morar no sul do Brasil e exerci a função de coordenadora pedagógica em cursos de idiomas. Essa experiência me permitiu pôr em prática as habilidades administrativas que eu havia adquirido.<br></br>
                    Juntamente com a coordenação pedagógica, dei os primeiros passos no universo da tradução, <strong>localizando sites, folders, cartões, manuais</strong> e outros conteúdos empresariais.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>Não era o bastante</h2>
                    <Image fluid className="SpImage" src={book} />
                </Container>
                <Container className="mt-3">
                    <p>Há dez anos que eu vinha traduzindo textos para diversos clientes e com os mais variados objetivos; no entanto, estava na hora de correr atrás de um sonho antigo: <strong>traduzir literatura</strong>. Lá fui eu e, em 2012, traduzi meu primeiro conto: <strong>The Three Strangers (Thomas Hardy)</strong>, intitulado <strong>“Os três forasteiros”</strong>, em português, publicado na revista literária R, pela editora Arte e Letra. Desde então, traduzi um número considerável de livros de ficção e não-ficção; mais além, traduzi uma história a respeito de <strong>Jane Austen</strong>, o que foi uma grande realização pessoal e profissional.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>Nunca é o bastante</h2>
                    <Image fluid className="interpretImage" src={interpret} />
                </Container>
                <Container className="mt-3">
                    <p>Em 2017, tive a chance de unir minhas duas paixões: traduzir e lecionar, quando recebi o convite da Interpret2b, um renomado curso de formação de tradutores e intérpretes, para lecionar <strong>Tradução literária</strong> a futuros profissionais da área. Deu tão certo que, em 2019, assumi a coordenação pedagógica do curso de Tradução. Atualmente, exerço ambas as funções, e os resultados obtidos, junto à equipe, têm sido gratificantes.</p>
                    <p>Para mais informações sobre a Interpret2b, por favor acesse <a href="http://www.interpret2b.com/">interpret2b.com</a>.</p>
                </Container>

                <Container className="mt-5 text-center justify-content-center text-align-center">
                    <h2>Outro convite inesperado, mas muito bem-vindo</h2>
                    <Image fluid className="" src={games} />
                </Container>
                <Container className="mt-3">
                    <p>Em 2020, devido à pandemia de Covid-19, o mercado de jogos se viu diante da urgência em desenvolver e lançar novos títulos rápida e massivamente, uma vez que as pessoas tiveram de permanecer em casa e precisaram alimentar hobbies ou encontrar novas formas de se divertir. Nessa época, fui convidada para prestar serviços de <strong>revisão</strong> a uma agência especializada em <strong>localização de jogos e HQs</strong>. Atuar na indústria de entretenimento é fascinante!</p>
                </Container>
                <Container className="mt-5 mb-5 text-center justify-content-center text-align-center">
                    <h4>Agora que você já me conhece, será um prazer trabalhar no seu projeto. Mande uma mensagem.</h4>
                    <Button onClick={props.onClick} className="mt-2" variant="dark" size="lg">Contato</Button>
                </Container>
            </div>
        );
    }
}

export default AboutMe;