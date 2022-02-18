import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Container, Row, Col, Card, Button, Image, Tab, Tabs} from "react-bootstrap";
import styled from "styled-components";
import Photo from "../../../assets/img/HealthLab.png";

const ProjectPage = (value) => {
    const [Project, setProject] = useState([]);
    const {id} = useParams();

    var project = {};

    Project.map((result) => {
        if (result.id == id) {
            project = result;
        }
    });

    console.log(id);

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonProjetos.json`).then((response) => response.json());
            setProject(result);
        }

        fetchData();
    }, []);

    const Section = styled.section`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
      font-family: "Open Sans", sans-serif;
      padding: 4.8rem 0 6rem;
      color: #452e4a;
    `;

    const TopContent = styled.div`
      max-width: 120rem;
      padding: 0 3.2rem;
      margin: 0 auto;
    `;

    const Cta = styled.div`
      display: grid;
      grid-template-columns: 70% 30%;
      box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.25);
      border-radius: 11px;

      background-image: linear-gradient(to right bottom, #e599f7, #f3d9fa);
      overflow: hidden;

    `;

    const CtaText = styled.div`
      padding: 3.8rem 5.4rem 0 5.4rem;
    `;

    const Text = styled.div`
      font-size: 0.9rem;
      line-height: 1.8;
    `;

    const Title = styled.h1`
      font-weight: 700;
      letter-spacing: -0.5px;
      font-size: 3.4rem;
      line-height: 1.2;
      margin-bottom: 2rem;
    `;

    const Description = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');;
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    `;

    const InternalDescription = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');;
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      text-align: initial;
    `;

    const Ul = styled.ul`
      margin: 0.3rem 0;
      list-style: disc;
    `;

    const Li = styled.li`
      padding: 0 0 0 1rem;
    `;

    const Enroll = styled.div`
      width: 100%;
      margin: 3rem 0 2rem 0;
    `;

    const divImg = styled.div`
      width: 100%;
    `;

    return (<div>
        <br></br>
        <Container>
            <Row>
                <Section>
                    <TopContent>
                        <Cta>
                            <CtaText>
                                <Title>
                                    {project.title}
                                </Title>
                                <Text>{project.description}</Text>
                            </CtaText>
                            <Image
                                src={project.imgLink}
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </Cta>
                    </TopContent>
                </Section>
            </Row>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <Row style={{gap: '1rem'}}>
                        <Col md={{span: 4, offset: 1}}>
                            <Card style={{maxWidth: '100%'}}>
                                <Card.Img variant="top" src={project.imgLink}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={{span: 5}}>
                            <divImg>
                                <Description>{project.description}</Description>
                            </divImg>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Info" title="Info">
                    <Text>
                        Prezado(a) aluno(a), tudo bem?

                        Primeiramente, agradecemos pelo interesse em participar dos nossos projetos!

                        Este é o formulário único e oficial de inscrição para o processo seletivo de todos os 5 projetos
                        de pesquisa e extensão do Learning Lab Ânima em 2021/02, que são:

                        I. Squad Gamificação Enade
                        II. Squad Professor Holográfico
                        III. Squad Personalização Ânima Play
                        IV. Squad Realidade Virtual na experiência do E2A
                        V. Squad do Zoom Apps

                        Antes de preencher esse formulário, certifique-se de ter lido todo o edital e estar ciente dos
                        pré-requisitos para inscrição em cada um dos projetos e de acordo com a regras do edital.

                        Observação: Caso queira se inscrever em mais de um projeto, envie um formulário por projeto
                        desejado.
                        Lembre-se, você pode se inscrever em mais de um projeto, mas, caso selecionado, poderá
                        participar somente de um.

                        As informações sobre processo seletivo, resultado e tratativas dos projetos serão enviados para
                        o email informado nesse formulário.

                        Algumas datas importantes:
                        • O período de inscrição dos alunos nos projetos apresentados no edital é de 25 a Agosto de 2021
                        à 07 de Setembro de 2021.
                        • O processo seletivo será feito no dia 08 de Setembro de 2021.
                        • A divulgação do resultado do processo seletivo será feita até o dia 09 de Setembro de 2021.

                        Em caso de dúvidas, entre em contato conosco:
                        • Email: projetolearninglabanima@gmail.com
                        • Instagram: @projetolearninglab


                        Equipe do Projeto LearningLab Ânima
                    </Text>
                </Tab>
                <Tab eventKey="contato" title="Contato" disabled>
                </Tab>
            </Tabs>

            <Enroll>
                <Card className="text-center">
                    <Card.Header>Painel de Inscrição</Card.Header>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            <InternalDescription>
                                Primeiramente, agradecemos o interesse e engajamento em participar dos nossos
                                projetos!
                            </InternalDescription>
                            <InternalDescription>
                                Antes de preencher esse formulário, certifique-se de ter lido todo o edital, estar
                                ciente dos pré-requisitos descritos e de acordo com a regras do edital. Acesse:
                                <a>https://learninglab.animahub.com.br/inscreva-se</a>.

                                Em caso de dúvidas, entre em contato conosco:
                                <Ul>
                                    <Li>Email da liderança (site</Li>
                                    <Li>Instagram: @projetolearninglab</Li>
                                </Ul>
                                Equipe do Learning Lab.
                            </InternalDescription>

                        </Card.Text>
                        <Button variant="primary">Inicie sua jornada agora</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">equipe anima hub</Card.Footer>
                </Card>
            </Enroll>
        </Container>
    </div>);
};

export default ProjectPage;
