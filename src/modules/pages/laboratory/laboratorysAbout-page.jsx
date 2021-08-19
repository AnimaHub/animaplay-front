import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router";

const LaboratoryAbout = () => {
  const [Laboratory, setLaboratory] = useState([]);
  const history = useHistory();

  const handleClick = (value) => {
    history.push(`/laboratorio/${value}`);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/JsonLab.json`
      ).then((response) => response.json());
      setLaboratory(result);
    }
    fetchData();
  }, []);

  const About = styled.h1`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    text-shadow: 0.5px 0.5px 0.5px #ffff;
    color: #a31078;
  `;

  const Title = styled.h2`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-shadow: 2px 1px 1px #ffffff;
    color: #592c81;
    text-transform: uppercase;
  `;

  const Border = styled.div`
    border-style: none;
  `;

  return (
    <div>
      <br />
      <br />
      <Container>
        {Laboratory.map((value) => (
          <>
            <Row>
              <Col xs={6} md={4}>
                <img src={value.imgLink} style={{ width: "15rem" }} />
              </Col>
              <Col xs={10} md={6}>
                <Title>{value.title}</Title>
                <About>{value.description}</About>
              </Col>
              <Col xs={3} md={2}>
                <div className="d-grid gap-2">
                  <Button
                    style={{ marginTop: "4rem" }}
                    onClick={() => handleClick(value.id)}
                  >
                    {" "}
                    Saiba Mais{" "}
                  </Button>
                </div>
              </Col>
              <hr />
            </Row>
            <br />
          </>
        ))}
      </Container>
    </div>
  );
};

export default LaboratoryAbout;
