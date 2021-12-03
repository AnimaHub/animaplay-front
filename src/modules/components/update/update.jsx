import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const Update = () => {
    const [campos, setCampos] = useState({
        cNome: "",
        cEmail: "",
        cTelefone: 0,
        cCep: "",
        cRua: "",
        cBairro: "",
        cNumero: 0,
        cCidade: "",
        cEstado: "",

        //Cadastro Automatico podendo ser alterado depois
        cTipoUsuario: 1, //admin
        cSenha: "123456",
    })

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    //Função que vai enviar os dados para consumo da API
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(campos);
    }

    return (
        <>
            <div class="form-signup">
                <h2>
                    <span> Atualizar Dados Pessoais </span>
                </h2>
                <Form>
                    <Form.Group className="md-3" controlId="formBasicName">
                        <Form.Label>Nome Completo:</Form.Label>
                        <Form.Control
                            type="email"
                            name="cNome"
                            id="cNome"
                            placeholder="Nome Completo"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Insira seu nome completo.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="md-3" controlId="formBasicEmail">

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTelefone">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                            type="int"
                            name="cTelefone"
                            id="cTelefone"
                            placeholder="Telefone"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">Telefone para contato.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRua">
                        <Form.Label>Rua/Avenida:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cRua"
                            id="cRua"
                            placeholder="Rua/Avenida"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Rua/Avenida onde está situada sua residência.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumero">
                        <Form.Label>Número:</Form.Label>
                        <Form.Control
                            type="number"
                            name="cNumero"
                            id="cNumero"
                            placeholder="Número"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">Ex.: 145, 36, 301.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBairro">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cBairro"
                            id="cBairro"
                            placeholder="Bairro"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">Ex.: 145, 36, 301.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCEP">
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cCep"
                            id="cCep"
                            placeholder="CEP"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Ex.: 31842030, 30525490.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCidade">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cCidade"
                            id="cCidade"
                            placeholder="Cidade"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Cidade onde está situada sua residência.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEstado">
                        <Form.Label>Estado:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cEstado"
                            id="cEstado"
                            placeholder="Estado"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Estado onde está situado sua residência.
                        </Form.Text>
                    </Form.Group>

                    <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Atualizar
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Update