import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Container, Row, Col, Card, Button, Image, Tab, Tabs} from "react-bootstrap";
import styled from "styled-components";

const LaboratoryPage = (value) => {
    const [Laboratory, setLaboratory] = useState([]);
    const {id} = useParams();
    console.log(id);

    var lab = {};
    Laboratory.map((result) => {
        if (result.id == id) {
            lab = result;
        }
    });

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`https://gist.githubusercontent.com/Leo3965/1f56509fa6356e550930f14e3e3dae7d/raw/0123a657ba4dbbb8e9485b3a058f8a057124f4f6/animalablab.json`)
                .then((response) => response.json())
            setLaboratory(result)
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
        <br></br>
        <Container>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <Row style={{gap: '1rem'}}>
                        <Col md={{span: 4, offset: 1}}>
                            <Card style={{maxWidth: '100%'}}>
                                <Card.Img variant="top" src={lab.imgLink}/>
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
                                <Description>{lab.description}</Description>
                            </divImg>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Info" title="Info">
                    <Text>
                        Prezado(a) aluno(a), tudo bem?

                        Primeiramente, agradecemos pelo interesse em participar dos nossos projetos!

                        Este ?? o formul??rio ??nico e oficial de inscri????o para o processo seletivo de todos os 5 projetos
                        de pesquisa e extens??o do Learning Lab ??nima em 2021/02, que s??o:

                        I. Squad Gamifica????o Enade
                        II. Squad Professor Hologr??fico
                        III. Squad Personaliza????o ??nima Play
                        IV. Squad Realidade Virtual na experi??ncia do E2A
                        V. Squad do Zoom Apps

                        Antes de preencher esse formul??rio, certifique-se de ter lido todo o edital e estar ciente dos
                        pr??-requisitos para inscri????o em cada um dos projetos e de acordo com a regras do edital.

                        Observa????o: Caso queira se inscrever em mais de um projeto, envie um formul??rio por projeto
                        desejado.
                        Lembre-se, voc?? pode se inscrever em mais de um projeto, mas, caso selecionado, poder??
                        participar somente de um.

                        As informa????es sobre processo seletivo, resultado e tratativas dos projetos ser??o enviados para
                        o email informado nesse formul??rio.

                        Algumas datas importantes:
                        ??? O per??odo de inscri????o dos alunos nos projetos apresentados no edital ?? de 25 a Agosto de 2021
                        a?? 07 de Setembro de 2021.
                        ??? O processo seletivo ser?? feito no dia 08 de Setembro de 2021.
                        ??? A divulga????o do resultado do processo seletivo ser?? feita at?? o dia 09 de Setembro de 2021.

                        Em caso de d??vidas, entre em contato conosco:
                        ??? Email: projetolearninglabanima@gmail.com
                        ??? Instagram: @projetolearninglab


                        Equipe do Projeto LearningLab ??nima
                    </Text>
                </Tab>
                <Tab eventKey="contato" title="Contato" disabled>
                </Tab>
            </Tabs>

            <Enroll>
                <Card className="text-center">
                    <Card.Header>Painel de Inscri????o</Card.Header>
                    <Card.Body>
                        <Card.Title>{lab.title}</Card.Title>
                        <Card.Text>
                            <InternalDescription>
                                Primeiramente, agradecemos o interesse e engajamento em participar dos nossos
                                projetos!
                            </InternalDescription>
                            <InternalDescription>
                                Antes de preencher esse formul??rio, certifique-se de ter lido todo o edital, estar
                                ciente dos pr??-requisitos descritos e de acordo com a regras do edital. Acesse:
                                <a>https://learninglab.animahub.com.br/inscreva-se</a>.

                                Em caso de d??vidas, entre em contato conosco:
                                <Ul>
                                    <Li>Email da lideran??a (site</Li>
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

            <Row>
                <Section>
                    <TopContent>
                        <Cta>
                            <CtaText>
                                <Title>
                                    {lab.title}
                                </Title>
                                <Text>{lab.description}</Text>
                            </CtaText>
                            <Image
                                src={lab.imgLink}
                                style={{
                                    backgroundSize: 'cover', backgroundPosition: 'center'
                                }}
                            />
                        </Cta>
                    </TopContent>
                </Section>
            </Row>
        </Container>
    </div>);
};

export default LaboratoryPage;
