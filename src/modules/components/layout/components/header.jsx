import React, {useState} from "react";
import styled from "styled-components";
import {
    Navbar,
    Container,
    Nav,
    Button,
    CloseButton,
    ModalBody,
} from "react-bootstrap";
import {VscAccount, VscActivateBreakpoints, VscChecklist} from "react-icons/vsc";
import {BiLogIn} from "react-icons/bi";
import ModalLayout from "../ModalLayout";
import Login from "../../login/login";
import SingUp from "../../signup/signup";
import {Link} from "react-router-dom";
import Update from "../../update/update";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSingUp, setIsSingUp] = useState(false);
    const [isButton, setIsButton] = useState(null);
    const [isLogged, setIsLogged] = useState(true)

    const closeUserData = () => {
        setIsLogged(false)
    }

    const openUserData = () => {
        setIsLogged(true)
        console.log("Tá logado!!!")
    }
    const closeModal = () => {
        setModalOpen(false);
    };
    const openModal = (value) => {
        console.log("OIII: ", value);
        setIsButton(value);
        setModalOpen(true);
    };

    const SingUpFunction = () => {
        setIsSingUp(true);
        return isSingUp;
    };
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
      text-decoration: none;
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
                    <Navbar.Brand>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Logo>ÂnimaPlay</Logo>
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link>
                            <Link to="/sobre" style={{textDecoration: "none"}}>
                                <NavLink>sobre</NavLink>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/laboratorios" style={{textDecoration: "none"}}>
                                <NavLink>laboratorios</NavLink>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/projeto" style={{textDecoration: "none"}}>
                                <NavLink>projetos</NavLink>
                            </Link>
                        </Nav.Link>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {true ? (
                            <Button variant="outline-none" onClick={() => openModal("atualizar")}>
                                <VscChecklist size={30} style={{color: "white"}}/>
                                <label style={{color: "white"}}>Atualizar Dados</label>
                            </Button>
                        ) : null}
                        <Button variant="outline-none" onClick={() => openModal("login")}>
                            <VscAccount size={30} style={{color: "white"}}/>
                            <label style={{color: "white"}}>Login</label>
                        </Button>
                        <Button variant="outline-none" onClick={() => openModal()}>
                            <BiLogIn size={30} style={{color: "white"}}/>
                            <label style={{color: "white"}}>Cadastrar-se</label>
                        </Button>
                        {isModalOpen ? (
                            <ModalLayout closeModal={closeModal} isModalOpen={isModalOpen}>
                                {isButton === "login" ? <Login /> : (isButton === "atualizar" ? <Update /> : <SingUp />)}
                            </ModalLayout>
                        ) : null}
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
                </Container>
            </Navbar>
        </Header>
    );
};



export default Header;
