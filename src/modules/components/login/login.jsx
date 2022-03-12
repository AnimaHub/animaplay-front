import React, {useContext, useState} from "react";
import {Form, Button} from "react-bootstrap";
import styled from "styled-components";
import ModalLayout from "../layout/ModalLayout";
import RecoverPass from "../recoverPass/recoverPass";
import {useHistory} from "react-router-dom";
import {login, Usuario} from "../../../services/usuario";
import {LoginContext} from "../../../helper/Context";
import {getUsuario} from "../../../utils/storege";

const Login = ({modal}) => {

    const {user, setUser} = useContext(LoginContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isButton, setIsButton] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = (value) => {
        setIsButton(value);
        setModalOpen(true);
    };


    const [campos, setCampos] = useState({
        email: "",
        senha: ``
    });


    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleArquivoChange(event) {
        campos.arquivo_id = event.target.value ? event.target.id : undefined;
        setCampos(campos);
    }

    //Função que vai enviar os dados para consumo da API
    async function handleFormSubmit(event) {
        event.preventDefault()
        const resposta = await login({...campos})
        if (!Boolean(getUsuario())) {
            setErrorMessage(resposta.message);
        } else {
            const id = resposta.dados.usuario.id_usuario;
            const nome = resposta.dados.usuario.nome;
            const tipoUsuario = resposta.dados.usuario.tipo_usuario;
            const idAdmin = resposta.dados.usuario.id_admin;

            const userObject = new Usuario(id, nome, tipoUsuario, idAdmin);
            userObject.logado = true;
            setUser(userObject);
            history.push('/anima');
            modal();
        }

    }

    const Title = styled.h1`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-size: 1.4em;
      color: #59329c;
      text-transform: uppercase;
      text-align: center;
    `;

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

    const Recover = styled.span`
      text-decoration: underline;
      cursor: pointer;
      font-size: 13px;
    `;

    return (
        <>
            <div className="form-login">
                <Logo>
                    ÂnimaFlix
                </Logo>
                <Title className="mb-5">
                    Login
                </Title>
                <Form id="form">
                    <Form.Group className="mb-3" controlId="formBasiemail">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Insira o e-mail"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            {errorMessage || 'E-mail cadastrado na plataforma.'}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            name="senha"
                            id="senha"
                            placeholder="Senha"
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Recover variant="outline-none" onClick={() => openModal()}>
                        Recuperar Senha
                    </Recover>
                    <ModalLayout closeModal={closeModal} isModalOpen={isModalOpen} height='350px'
                                 width='565px'>
                        <RecoverPass/>
                    </ModalLayout>

                    <Button className="mt-4"
                            variant="secondary"
                            size="sm"
                            style={{backgroundColor: "#6610f2", width: "100%"}}
                            type="submit"
                            onClick={handleFormSubmit}
                    >
                        Login
                    </Button>{" "}
                </Form>
            </div>
        </>
    );
};

export default Login;
