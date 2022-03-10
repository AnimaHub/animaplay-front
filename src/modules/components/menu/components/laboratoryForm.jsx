import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Row, Col, InputGroup, Button, Form} from 'react-bootstrap'
import {UploadImage} from '../components/uploadImage'

export const LaboratoryForm = () => {

    const [validated, setValidated] = useState(false);

    const [laboratory, setLaboratory] = useState({
        nome: '',
        grandeArea: '',
        areaDoConhecimento: '',
        logo: '',
        liderLab: '',
        site: '',
        instagram: '',
        labEmail: '',
        descricaoCurta: '',
        descricaoLonga: '',
        projetos: '',
        eventos: ''
    })

    const handleInputChange = event => {
        laboratory[event.target.name] = event.target.value
        setLaboratory(laboratory)
    }

    const handleImage = base64 => {
        //console.log(base64)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.table(laboratory)
    }

    const FlexContainer = styled.div`
      display: flex;
    `

    return (<Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    required
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Grande Área</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="grandeArea"
                    placeholder="Engenharia & Computação"
                    onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Líder Lab</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    name="liderLab"
                    defaultValue="Leonardo"
                    onChange={handleInputChange}
                    disabled
                    required/>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                </Form.Control.Feedback>
            </Form.Group>

        </Row>

        <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Área Do Conhecimento</Form.Label>
                <Form.Control
                    required
                    name='areaDoConhecimento'
                    type="text"
                    name="areaDoConhecimento"
                    placeholder="Engenharia"
                    onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Lab Email</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        name='liderLab'
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Site</Form.Label>
                <Form.Control
                    name='site'
                    type="text"
                    placeholder="www.site.com.br"
                    onChange={handleInputChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
            </Form.Group>

        </Row>

        <FlexContainer>

            <div>
                <Row style={{gap: '1rem', marginBottom: '1.5rem'}}>
                    <Form.Group as={Col} md="5" controlId="validationCustom09">
                        <Form.Label>Projetos</Form.Label>
                        <Form.Select
                            aria-label="state select"
                            name='projetos'
                            type="text"
                            placeholder="Projetos"
                            onChange={handleInputChange}
                            required
                        >
                            <option className="text-muted">Selecione um projeto</option>
                            <option value="AC">PROJETO 1</option>
                            <option value="AC">PROJETO 2</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="5" controlId="validationCustom10">
                        <Form.Label>Eventos</Form.Label>
                        <Form.Select
                            aria-label="state select"
                            name='eventos'
                            type="text"
                            placeholder="Instagram"
                            onChange={handleInputChange}
                            required
                        >
                            <option className="text-muted">Selecione um evento</option>
                            <option value="AC">EVENTO 1</option>
                            <option value="AC">EVENTO 2</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row style={{gap: '1rem', marginBottom: '1.5rem'}}>
                    <Form.Group as={Col} md="5" controlId="validationCustom06">
                        <Form.Label>Instagram</Form.Label>
                        <Form.Control
                            name='instagram'
                            type="text"
                            placeholder="Instagram"
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="5" controlId="validationCustom07">
                        <Form.Label>Breve Descrição</Form.Label>
                        <Form.Control
                            name='descricaoCurta'
                            type="text"
                            placeholder="Introdução"
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row style={{marginBottom: '2rem'}}>
                    <Form.Group as={Col} md="11" controlId="validationCustom08">
                        <Form.Label>Descrição Completa</Form.Label>
                        <Form.Control
                            as='textarea'
                            aria-label="textarea"
                            type="text"
                            name='descricaoLonga'
                            placeholder="Descrição Completa"
                            onChange={handleInputChange}
                            required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </div>

            <UploadImage handleImage={handleImage}/>
        </FlexContainer>
    </Form>)
}

export default LaboratoryForm