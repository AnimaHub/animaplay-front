import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";

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


const Questions = () => { 

    return (    
        <div>
        <br></br>
        <Container  className="mb-3" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '30px'}}>
        <TitleRegistration className="mt-5 ml-2">2.Questionario</TitleRegistration>
          <Row>
           <Label>Você ja participou do Nome do Projeto em 2021/1?</Label>
            <Col>
            <Form.Group className="mb-3 form-horizontal" controlId="formBasicEmail"></Form.Group>          
           <Form.Check
            type="radio"
            label="Sim"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            class="radio-inline"
            />
            <Form.Check
            type="radio"
            label="Não"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            class="radio-inline"
            />
            </Col>
          </Row>
         
        </Container>
      </div>
    );
};


export default Questions;