import React, {useContext} from "react";
import Project from "../projects/components/caroulselProject";
import Laboratory from "../laboratory/components/carouselLaboratory";
import Menu from '../../components/menu/menu'
import {Redirect} from "react-router-dom";
import {LoginContext} from "../../../helper/Context";
import {Container} from 'react-bootstrap'

const AnimaPage = () => {
    const {user, setUser} = useContext(LoginContext);

    if (!user.logado) {
        return (<Redirect to="/"/>)
    }

    return (<div
        style={{
            backgroundColor: '#f0804c',
            paddingBottom: '2rem',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
        }}
    >
        <Container>
            <Menu></Menu>
        </Container>
        <Project></Project>
        <Laboratory></Laboratory>
    </div>);
}

export default AnimaPage