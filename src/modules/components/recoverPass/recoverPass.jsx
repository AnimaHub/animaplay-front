import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import styled from "styled-components";
import {recoveryPassword} from "../../../services/usuario";

const RecoverPass = () => {

    const Logo = styled.h1`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 2.8em;
      background-image: linear-gradient(to right, #3eaed7, #a11077);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    `;

    const Title = styled.h1`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-size: 1.1em;
      color: #59329c;
      text-transform: uppercase;
      text-align: center;
    `;

    const [email, setEmail] = useState('');
    const [isButtonInactive, setIsButtonInactive] = useState(false);
    const [message, setMessage] = useState(null);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Veio aqui');
        if (email !== '' || email !== null) {
            let message;

            setIsButtonInactive(true);
            const response = await recoveryPassword({email});

            if (response[0]) {
                message = response[0].message;
            } else {
                message = response.message;
            }

            // console.table(message);
            // console.table(response);

            setMessage(message);

            if (message !== 'Email enviado com suscesso') {
                setIsButtonInactive(false);
            }
        } else {
            setMessage('Email inválido');
        }
    }

    return (
        <>
            <div class="form-recoverpass">
                <Logo>
                    ÂnimaFlix
                </Logo>
                <Title className="mb-1">
                    Recuperar Senha
                </Title>
                <Form id="form">
                    <Form.Group className="mt-3">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="emailRecover"
                            placeholder="Insira o e-mail"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted mt-4">
                            {message || 'E-mail para recuperação da senha.'}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-4"
                            variant="secondary"
                            size="sm"
                            style={{backgroundColor: "#6610f2", width: "100%"}}
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isButtonInactive}
                    >
                        Recuperar
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default RecoverPass;
