import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ProjectPage = (value) => {
  const [Project, setProject] = useState([]);
  const { id } = useParams();

  var project = {};

  Project.map((result) => {
    if (result.id == id) {
      project = result;
    }
  });

  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonProjetos.json`
      ).then((response) => response.json());
      setProject(result);
    }
    fetchData();
  }, []);

  const Title = styled.h1`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    color: #592c81;
    text-transform: uppercase;
    text-align: center;
  `;

  const Description = styled.p`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #592c81;
    text-transform: uppercase;
  `;

  const divImg = styled.div`
    width: 100%;
  `;

  return (
    <div>
      <br></br>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title>{project.title}</Title>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <divImg>
              <Description>{project.description}</Description>
            </divImg>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <divImg>
              <img src={project.imgLink} style={{ width: "22rem" }}></img>
            </divImg>
          </Col>
          <Col md={{ span: 5 }}>
            <divImg>
              <Description>{project.description}</Description>
            </divImg>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectPage;
