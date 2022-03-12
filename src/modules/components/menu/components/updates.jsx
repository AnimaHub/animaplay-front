import {React, useState} from 'react'
import styled from 'styled-components'
import {Toast} from 'react-bootstrap'
import holder from "../../../../assets/img/holder.svg"

const Updates = () => {

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)

    const toggleShowA = () => setShowA(!showA)
    const toggleShowB = () => setShowB(!showB)

    const UpdateBox = styled.div`
      padding: 1rem 2rem;
      gap: 1rem;
      display: flex;
      align-items: center;
    `

    return (
        <UpdateBox>
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
        </UpdateBox>
    )
}

export default Updates