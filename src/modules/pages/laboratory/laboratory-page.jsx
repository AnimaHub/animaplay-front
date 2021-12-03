import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Project from "../projects/Project";

const LaboratoryPage = (value) => {
  const [Laboratory, setLaboratory] = useState([]);
  const { id } = useParams();
  console.log(id);

  var lab = {};
  Laboratory.map((result) => {
    if (result.id == id) {
      lab = result;
    }
  });

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/JsonLab.json`
      ).then((response) => response.json());
      setLaboratory(result);
    }
    fetchData();
  }, []);

  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    letter-spacing: 1.2px;
    word-spacing: 2px;
    color: #C87BB7;
    font-weight: 400;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
    text-align: center;
  `;

  const ProjectsTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  letter-spacing: 1.2px;
  word-spacing: 2px;
  color: #fff;
  font-weight: 400;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  text-align: center;
`;

  const Description = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 31px;
    color: #fff;
    overflow: auto;
    height: 100%;
  `;

 



  return (
    <div style={{background: '#6B2481'}}>
      <br></br>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title className="mt-3">{lab.title}</Title>
          </Col>
        </Row>
        <Row style={{marginTop: '25px'}}>
          <Col md={{ span: 6}}>
            <divImg>
              <img src={lab.imgLink} style={{ width: "100%", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}></img>
            </divImg>
          </Col>
          <Col md={{ span: 6}}>
            <divImg>
              <Description>{lab.description}</Description>
            </divImg>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectsTitle className="my-5">NOSSOS PROJETOS</ProjectsTitle>
          </Col>
        </Row>
        <Project></Project>
      </Container>
    </div>
  );
};

export default LaboratoryPage;
