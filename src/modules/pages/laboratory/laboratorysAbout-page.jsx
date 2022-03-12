import React, {useEffect, useState} from "react"
import {Container, Button, Row, Col} from "react-bootstrap"
import styled from "styled-components"
import {useHistory} from "react-router"
import peopleLogo from '../../../assets/img/lab-logos/cubo-lab-unibh-11.png'
import EngLogo from '../../../assets/img/lab-logos/cubo-lab-unibh-13.png'
import PlantLogo from '../../../assets/img/lab-logos/cubo-lab-unibh_Prancheta-15.png'
import JusticeLogo from '../../../assets/img/lab-logos/cubo-lab-unibh_Prancheta-1-07.png'
import Introduction from "../../components/introduction/introduction";

const LaboratoryAbout = () => {

    const title = 'Laboratórios Temáticos'
    const contentList = [
        'Clique em "SITE" e faça a sua inscrição para participar de um dos projetos dos nossos',
        'laboratórios temáticos nas',
        'áreas do conhecimento do Ecossistema Ânima'
    ]

    const [Laboratory, setLaboratory] = useState([])
    const history = useHistory()

    const handleClick = (value) => {
        history.push(`/laboratorio/${value}`)
    };

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                `https://gist.githubusercontent.com/Leo3965/1f56509fa6356e550930f14e3e3dae7d/raw/0123a657ba4dbbb8e9485b3a058f8a057124f4f6/animalablab.json`
            ).then((response) => response.json())
            setLaboratory(result)
        }

        fetchData()
    }, [])

    const LabTitle = styled.div`
      font-family: 'Ubuntu', sans-serif;
      background: #FFF;
      color: #A01745;
      font-size: 1.5rem;
      padding: 1rem 3rem;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 400;
    `

    const LabGrid = styled.div`
      padding: 2rem 4rem;
      font-family: 'Ubuntu', sans-serif;
      background: #F0804C;
    `

    const LabCard = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
    `

    const LabImg = styled.img`
      max-width: 10rem;
      border-radius: 1rem;
    `

    const LabUniversity = styled.span`
      font-weight: 400;
      white-space: nowrap;
      color: #000;
      font-size: 0.7rem;
    `

    const LabButton = styled.button`
      font-family: 'Ubuntu', sans-serif;
      border-radius: 0.5rem;
      background-color: #A01745;
      white-space: nowrap;
      color: #FFF;
      font-size: 0.8rem;
      text-transform: uppercase;
      padding: 0.2rem 2rem;
      font-weight: 50;
      max-width: 80%;
      border: none;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: #701030;
      }
    `

    return (
        <>
            <Introduction title={title} contentList={contentList}/>

            <LabTitle> Engenharia </LabTitle>
            <LabGrid>
                <Container>
                    <Row>
                        <Col sm>
                            <LabCard>
                                <LabImg src={peopleLogo}/>
                                <LabUniversity>USJT</LabUniversity>
                                <LabButton>Site</LabButton>
                            </LabCard>
                        </Col>

                        <Col sm>
                            <LabCard>
                                <LabImg src={EngLogo}/>
                                <LabUniversity>UniBh</LabUniversity>
                                <LabButton>Site</LabButton>
                            </LabCard>
                        </Col>

                        <Col sm>
                            <LabCard>
                                <LabImg src={PlantLogo}/>
                                <LabUniversity>University</LabUniversity>
                                <LabButton>Site</LabButton>
                            </LabCard>
                        </Col>

                        <Col sm>
                            <LabCard>
                                <LabImg src={JusticeLogo}/>
                                <LabUniversity>Faculdade</LabUniversity>
                                <LabButton>Site</LabButton>
                            </LabCard>
                        </Col>
                    </Row>

                </Container>
            </LabGrid>

            <LabTitle> Outros </LabTitle>
            <LabGrid>
                <Container>
                    <Row>
                        {Laboratory.map((value) => (
                            <Col sm={3}>
                                <LabCard>
                                    <LabImg src={value.imgLink}/>
                                    <LabUniversity>{value.title}</LabUniversity>
                                    <LabButton onClick={() => handleClick(value.id)}>Saiba Mais</LabButton>
                                </LabCard>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </LabGrid>
        </>
    );
};

export default LaboratoryAbout;
