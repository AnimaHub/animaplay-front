import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Row, Col, ListGroup, Tab, Toast} from 'react-bootstrap'
import holder from '../../../assets/img/holder.svg'
import {LaboratoryForm} from '../menu/components/laboratoryForm'

const Menu = () => {

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
    const [activeItem, setActiveItem] = useState('update');

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    const handleList = (event, list) => {
        setActiveItem(list)
    }

    const Content = styled.div`
      border: 1px solid #ced4da;
      padding: 2rem;
      margin-top: 2rem;
      background-color: #fff;
      border-radius: 10px;
    `

    return (<Content fluid>
        <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item href="#link1" onClick={(e) => {
                            handleList(e, 'update')
                        }}>
                            Atualizações
                        </ListGroup.Item>
                        <ListGroup.Item href="#link2" onClick={(e) => {
                            handleList(e, 'singUpLab')
                        }}>
                            Cadastrar laboratórios
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane
                            style={{
                                display: 'flex', gap: '0.5rem'
                            }}
                            eventKey="#link1"
                        >

                            {activeItem === 'update' ? <>
                                <Toast show={showA} onClose={toggleShowA}>
                                    <Toast.Header>
                                        <img src={holder} className="rounded me-2" alt=""/>
                                        <strong className="me-auto">Anima</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Everyday can be a better day</Toast.Body>
                                </Toast>

                                <Toast show={showB} onClose={toggleShowB}>
                                    <Toast.Header>
                                        <img src={holder} className="rounded me-2" alt=""/>
                                        <strong className="me-auto">USJT</strong>
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Trabalho bla bla nla</Toast.Body>
                                </Toast>
                            </> : ''}

                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            {activeItem === 'singUpLab' ? <LaboratoryForm/> : ''}
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Content>)
}

export default Menu