import React, {useContext, useState} from "react";
import {Form, Button, Alert} from "react-bootstrap";
import {LoginContext} from "../../../helper/Context";
import Capture from "../signup/components/videocapture";
import styled from "styled-components";

const Update = () => {

    const Image = styled.div`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

    const {user, setUser} = useContext(LoginContext);
    const [campos, setCampos] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: 0,
        cep: "",
        rua: "",
        bairro: "",
        numero: 0,
        cidade: "",
        estado: "",
        cpf: "",
        rg: "",
        foto: "",
        tipoUsuario: 1, //admin
        senha: "",
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [variant, setVariant] = useState('');
    const [isButtonInactive, setIsButtonInactive] = useState(false);

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    const handleCapture = (picture) => {
        if (picture) {
            picture = picture.replace('data:image/jpeg;base64,', '')
            campos['foto'] = picture
            setCampos(campos)
        }
    }

    //Função que vai enviar os dados para consumo da API
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(campos);
    }

    return (
        <>
            <div class="form-update">
                <h2>
                    <span> Atualizar Dados Pessoais </span>
                </h2>
                <Form>
                    <Form.Group className="md-3" style={{marginBottom: '1rem'}} controlId="formBasicName">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Nome"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Insira seu nome
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="md-3" style={{marginBottom: '1rem'}} controlId="formBasicSobrenome">
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control
                            type="text"
                            name="sobrenome"
                            id="sobrenome"
                            placeholder="Sobrenome"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Insira seu sobrenome
                        </Form.Text>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTelefone">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                            type="int"
                            name="telefone"
                            id="telefone"
                            placeholder="Telefone"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">Telefone para contato</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRua">
                        <Form.Label>Rua/Avenida:</Form.Label>
                        <Form.Control
                            type="text"
                            name="rua"
                            id="rua"
                            placeholder="Rua/Avenida"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Rua/Avenida onde está situada sua residência
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumero">
                        <Form.Label>Número:</Form.Label>
                        <Form.Control
                            type="number"
                            name="numero"
                            id="numero"
                            placeholder="Número"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">Ex.: 145, 36, 301.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBairro">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Bairro"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Bairro onde está situada sua residência
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCEP">
                        <Form.Label>Cep:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cep"
                            id="cep"
                            placeholder="CEP"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Ex.: 31842030, 30525490
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCidade">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cidade"
                            id="cidade"
                            placeholder="Cidade"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Cidade onde está situada sua residência
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEstado">
                        <Form.Label>Estado:</Form.Label>
                        <Form.Select aria-label="state select"
                                     name="estado"
                                     id="estado"
                                     placeholder="Estado"
                                     onChange={handleInputChange}
                        >
                            <option className="text-muted">Selecione um estado</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                            <option value="DF">DF</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            Estado onde está situado sua residência
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCpf">
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="CPF"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Informe o seu CPF
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRg">
                        <Form.Label>RG:</Form.Label>
                        <Form.Control
                            type="text"
                            name="rg"
                            id="rg"
                            placeholder="RG"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Informe o seu RG
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFoto">
                        <Form.Label>Foto:</Form.Label>
                        <Image>
                            <Capture inputChange={handleCapture}/>
                        </Image>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o seu email
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSenha">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            name="senha"
                            id="senha"
                            placeholder="Senha"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite a senha de acesso ao portal
                        </Form.Text>
                    </Form.Group>

                    {errorMessage ? (
                        <Alert variant={variant}>
                            {errorMessage}
                        </Alert>
                    ) : ''}

                    <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
                        onClick={handleFormSubmit}
                        disabled={isButtonInactive}
                    >
                        Inscreva-se
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Update