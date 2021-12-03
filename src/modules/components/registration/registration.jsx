import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import Questions from "./questions";

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Roboto:wght@100;300&display=swap');
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 46px;
/* identical to box height */
letter-spacing: 4px;
color: #6B2481;
border: 1px solid #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-align: center;
`;

const TitleRegistration = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Roboto:wght@100;300&display=swap');
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 46px;
/* identical to box height */
letter-spacing: 4px;
color: #6B2481;
border: 1px solid #FFFFFF;
`;


const Label = styled.h5`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Roboto:wght@100;300&display=swap');
font-family: 'Abel', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 46px;
/* identical to box height */
letter-spacing: 4px;
color: #6B2481;
border: 1px solid #FFFFFF;
text-decoration-line: underline;
`;

const Registration = (value) => { 

    return (
        <div>
        <br></br>
        <Container  className="mb-3" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '30px'}}>
        <Title className="mt-3">NOME PROJETO</Title>
        <TitleRegistration className="mt-5 ml-2">1.Candidatar-se</TitleRegistration>
          <Row>
            <Col className="col-md-6 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Nome Completo</Label>
            <Form.Control type="text" placeholder="Nome" />
            </Col>
            <Col className="col-md-6 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Email</Label>
            <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>RA(Obrigatório apenas para alunos do ecossistema Ânima)</Label>
            <Form.Control type="text" placeholder="RA" />
            </Col>
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Telefone</Label>
            <Form.Control type="tel" placeholder="Telefone" />
            </Col>
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Instituição</Label>
            <Form.Select aria-label="Default select example">
            </Form.Select>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Campus</Label>
            <Form.Select aria-label="Default select example">
            </Form.Select>
            </Col>
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Curso</Label>
            <Form.Select aria-label="Default select example">
            </Form.Select>
            </Col>
            <Col className="col-md-4 ml-3">
            <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
            <Label>Periodo</Label>
            <Form.Select aria-label="Default select example">
            </Form.Select>
            </Col>
          </Row>
        </Container>
        <Questions></Questions>
      </div>
    );
};


export default Registration;