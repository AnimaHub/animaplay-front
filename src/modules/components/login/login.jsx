import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { getUsuario } from "../../../utils/storege";

import { login, arquivoTeste } from "../../../services/usuario";
import {
  cadastrarLaboratorio,
  listarLaboratorio,
} from "../../../services/laboratorio";
import { cadastrarProjeto, listarProjeto } from "../../../services/projeto";
import Home from "../../pages/home/home";
import ModalLayout from "../layout/ModalLayout";

const Login = () => {
  const [campos, setCampos] = useState({
    email: "",
    senha: ``,
    arquivo_id: undefined,
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
    event.preventDefault();
    console.log("Campos", campos);

    let resposta = await login({ ...campos, tipo_usuario: "lider_lab" });

    console.log("RESPOSTA FINAL: ", resposta);

    console.log("usuarioStorage: ", getUsuario());
    window.location.href='/anima'
  }

  async function testes(event) {
    /* event.preventDefault();

    let respostaLabs = await cadastrarLaboratorio({
      nome: "Usuario de teste",
      email: "teste@teste.com",
      telefone: "31 99566-8243",
      arquivo_id: campos.arquivo_id,
      endereco: {
        cep: "96830-260",
        rua: "Rua Padre José Belzer",
        bairro: "Arroio Grande",
        numero: "298",
        cidade: "Santa Cruz do Sul",
        estado: "RS",
        link: "https://animaeducacao.zoom.us/j/82475918671",
        tipo: "fisico",
      },
    });

    console.log("Resposta labs post: ", respostaLabs); */
    /*

    let respostaProjects = await cadastrarProjeto({
      nome: "Projeto de teste",
      data_inicial: "14/09/2021",
      data_final: "14/12/2021",
      descricao: "Projeto descricao",
      categoria: "extensao",
      carga_horaria: 125,
      status_projeto: "aguardando_publicacao",
      endereco: {
        cep: "96830-260",
        rua: "Rua Padre José Belzer",
        bairro: "Arroio Grande",
        numero: "298",
        cidade: "Santa Cruz do Sul",
        estado: "RS",
        link: "https://animaeducacao.zoom.us/j/82475918671",
        tipo: "fisico",
      },
    });

    console.log("Resposta projects post: ", respostaProjects);

    let respostaProjectsList = await listarProjeto();
    let respostaLabsList = await listarLaboratorio();

    console.log("Resposta labs get: ", respostaLabsList);

    console.log("Resposta projects get: ", respostaProjectsList); */
  }
  function handleSingUp() {
    return true
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
    font-size:  2.8em;
    background-image: linear-gradient(to right, #3eaed7, #a11077);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  `;
  return (
    <>
      <div className="form-login">
        <Logo>
        ÂnimaFlix
        </Logo>
        <Title>
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
              E-mail cadastrado na plataforma.
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
          
          <Button
            variant="secondary"
            size="sm"
            style={{ backgroundColor: "#6610f2" }}
            type="submit"
            onClick={handleFormSubmit}
          >
            Login
          </Button>{" "}
         
         
          <ModalLayout>
                 <Home></Home>
          </ModalLayout>
        </Form>
      </div>
    </>
  );
};

export default Login;
