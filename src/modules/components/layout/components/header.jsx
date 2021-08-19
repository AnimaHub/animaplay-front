import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Container, Nav, Button, CloseButton, ModalBody } from "react-bootstrap";
import { VscAccount } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import  ModalLayout  from "../ModalLayout"
import Login from "../../login/login";
import SingUp from "../../signup/signup"

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSingUp, setIsSingUp] = useState(false);
  const [isButton, setIsButton] = useState(null)
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = (value) => {
    console.log("OIII: ",value)
    setIsButton(value)
    setModalOpen(true);
  };

  const SingUpFunction = () => {
    setIsSingUp(true)
    return isSingUp
  }
  const Header = styled.div`
    background-image: linear-gradient(to right, #6b2481, #a30f77);
    height: 100%;
  `;

  const Logo = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    background-image: linear-gradient(to right, #3eaed7, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px;
  `;

  const NavLink = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 16px;
    color: #ffff;
    text-transform: uppercase;
    margin: 20px;
    padding: 10px;
  `;

  return (
    <Header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Logo>ÂnimaFlix</Logo>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Nav.Link href="/sobre">
              <NavLink>sobre</NavLink>
            </Nav.Link>
            <Nav.Link href="/laboratorios">
              <NavLink>laboratorios</NavLink>
            </Nav.Link>
            <Nav.Link href="/projeto">
              <NavLink>projetos</NavLink>
            </Nav.Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-none" onClick={() => openModal("login")}>
              <VscAccount size={30} style={{ color: "white" }} />
              <label  style={{ color: "white" }}>Login</label>
            </Button>
            <Button variant="outline-none" onClick={() => openModal()}>
              <BiLogIn size={30} style={{ color: "white" }}/>
              <label  style={{ color: "white" }}>Cadastrar-se</label>
            </Button>
            {isModalOpen ? (
               <ModalLayout closeModal={closeModal} isModalOpen={isModalOpen} >
                {isButton === 'login'? (<Login/>):(<SingUp/>)}
                 
               </ModalLayout>
            ) : null}
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            
            
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </Header>
  );
};

export default Header;
