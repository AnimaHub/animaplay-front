import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router";

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

  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium massa vitae dui hendrerit dignissim. In lectus enim, pulvinar in eleifend vitae, lobortis vitae tellus. Donec scelerisque, augue quis tempor sollicitudin, erat augue suscipit lectus, quis cursus purus quam sit amet ex. Sed pulvinar, magna id porttitor congue, massa tellus mollis tellus, eu mollis eros lorem non dui. Integer pharetra neque in nunc placerat aliquam vitae eu orci. Sed est justo, auctor id imperdiet sit amet, lacinia pellentesque elit. Cras ex eros, dictum non lacinia id, varius quis urna. Proin consectetur dignissim elementum. Curabitur sit amet maximus nulla. Phasellus dui nisl, tempor sit amet lectus ac, vulputate tempor augue. In a metus et mi pharetra fringilla non eget quam. Integer ut viverra est.';

const Project = () => {
 
    return (
        <div style={{background: '#6B2481'}}>
        <br></br>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={{ span: 6}}>
              <divImg>
              <Description>{text}</Description>
              </divImg>
            </Col>
            <Col md={{ span: 6}}>
              <divImg>
              <img src="https://images.unsplash.com/photo-1578496479939-722d9dd1cc5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" style={{ width: "100%", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                  }}></img>
              </divImg>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6}}>
            <Button className="btn btn-light mt-2 mb-5"
                    style={{ color: '#A30F77', marginLeft: '11rem'}}
                  >
                    Edital Disponivel           
            </Button>
            </Col>
            <Col md={{ span: 6}}>
            <Button className="btn btn-outline-light mt-2 mb-5 w-100"
                    style={{}}
                    
                  >
                    INSCREVA-SE JA!         
            </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
};


export default Project;