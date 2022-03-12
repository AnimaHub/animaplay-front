import {React, useState} from 'react'
import styled from 'styled-components'
import {Tab, Tabs} from 'react-bootstrap'
import {LaboratoryForm} from '../menu/components/laboratoryForm'
import Updates from "./components/updates";

const Menu = () => {

    const [key, setKey] = useState('update')


    const Content = styled.div`
      border: 1px solid #ced4da;
      padding: 2rem;
      margin-top: 2rem;
      background-color: #fff;
      border-radius: 10px;
    `

    return (<Content fluid>

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="update" title="Atualizações">
                <Updates/>
            </Tab>
            <Tab eventKey="enrollLab" title="Cadastrar laboratórios">
                <LaboratoryForm/>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
        </Tabs>

    </Content>)
}

export default Menu