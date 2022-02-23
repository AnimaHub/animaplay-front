import React, {useContext, useState} from "react";
import styled from "styled-components";
import {
    Navbar, Container, Nav, Button, CloseButton, ModalBody,
} from "react-bootstrap";
import {VscAccount} from "react-icons/vsc";
import {BiAbacus, BiAccessibility, BiLogIn, BiWinkTongue} from "react-icons/bi";
import ModalLayout from "../ModalLayout";
import Login from "../../login/login";
import SignUp from "../../signup/signup";
import Update from "../../update/update";
import {Link, useHistory} from "react-router-dom";
import {LoginContext} from "../../../../helper/Context";
import {limparUsuario} from "../../../../utils/storege";
import logo from '../../../../assets/img/animalab_hub-02.png';

const Header = () => {

    const {user, setUser} = useContext(LoginContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSingUp, setIsSingUp] = useState(false);
    const [isButton, setIsButton] = useState(null);
    const history = useHistory();

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

    const logOut = () => {
        let userObject = user;
        userObject.logado = false;
        setUser(userObject);
        limparUsuario();
        history.push('/');
    }

    const Header = styled.div`
      background-image: linear-gradient(to right, #5d388d, #a01745, #f0804c);
      height: 100%;
      box-shadow: 0px -4px 26px -3px rgba(0, 0, 0, 4%);
    `;

    const Logo = styled.img`
      height: 50px;
    `;

    const NavLink = styled.text`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-size: 16px;
      color: #ffff;
      text-transform: uppercase;
      margin: 20px;
      padding: 10px;

    `;


    return (<Header>
        <Navbar collapseOnSelect expand="lg"
                style={{boxShadow: "0px -4px 26px 5px rgb(0 0 0 / 55%)", bacground: "#121212"}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Logo src={logo}/>
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle style={{
                    filter: 'invert(88%) sepia(100%) saturate(4%) hue-rotate(270deg) brightness(111%) contrast(97%)'
                }}/>
                <Navbar.Collapse className="justify-content-start">
                    <Nav.Link>
                        <Link to="/sobre" style={{textDecoration: "none"}} className="fs-6">
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
                    {!user.logado && <Button variant="outline-none" onClick={() => openModal("login")}>
                        <VscAccount size={30} style={{color: "white"}}/>
                        <label style={{color: "white"}}>Login</label>
                    </Button>}

                    {!user.logado && <Button variant="outline-none" onClick={() => openModal('signUp')}>
                        <BiLogIn size={30} style={{color: "white"}}/>
                        <label style={{color: "white"}}>Cadastrar-se</label>
                    </Button>}

                    {user.logado && <Button variant="outline-none" onClick={() => openModal('MyAccount')}>
                        <BiWinkTongue size={30} style={{color: "white"}}/>
                        <label style={{color: "white"}}>Minha Conta</label>
                    </Button>}

                    {user.logado && <Button variant="outline-none" onClick={() => logOut()}>
                        <BiAccessibility size={30} style={{color: "white"}}/>
                        <label style={{color: "white"}}>Sair</label>
                    </Button>}

                    {isModalOpen ? (<ModalLayout closeModal={closeModal} isModalOpen={isModalOpen} height='530px'
                                                 width='580px'>
                        {isButton === "login" && <Login modal={closeModal}/>}
                        {isButton === 'signUp' && <SignUp/>}
                        {isButton === 'MyAccount' && <Update></Update>}
                    </ModalLayout>) : null}
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            </Container>
        </Navbar>
    </Header>);
};

export default Header;
