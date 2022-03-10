import React, {useState} from "react";
import {Form, Button, Alert, Spinner} from "react-bootstrap";
import styled from "styled-components";
import Capture from "./components/videocapture";
import {signUp} from "../../../services/usuario";
import {capitalizeCamelCase} from "../../../services/string";

const SignUp = () => {

    const [campos, setCampos] = useState({
        nome: "",
        email: "",
        senha: "",
        telefone: 0,
        foto: "",
        tipoUsuario: "",
        ra: "",
        curso: "",
        instituicao: "",
        tipoAluno: "",
        empresa: "",
        cargo: "",
        cep: "",
        rua: "",
        bairro: "",
        numero: 0,
        cidade: "",
        estado: "",
        tipo: "fisico"
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [variant, setVariant] = useState('');
    const [isButtonInactive, setIsButtonInactive] = useState(false);
    const [userType, setUserType] = useState('')

    function handleRadioButton(event, type, student) {
        if (student) campos[event.target.name] = student

        if (type) {
            campos[event.target.name] = type
            setUserType(type)
        }
    }


    function handleInputChange(event) {
        if (event.target.name === "telefone" || event.target.name === "cep" || event.target.name === "numero" || event.target.name === "cpf" || event.target.name === "ra") {
            event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
        }

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
    async function handleFormSubmit(event) {
        event.preventDefault();
        checkFields();

        if (errorMessage === '') {
            setIsButtonInactive(true)
            setLoading(true)
            const responseCode = await signUp(campos)
            setLoading(false)
            configureResponse(responseCode)
        }
    }

    function configureResponse(code) {
        if (code === 201) {
            setMessage('info', 'conta cadastrada no sistema 🥳')
            return
        }

        setIsButtonInactive(false);

        if (code === 409) {
            setMessage('danger', 'email já cadastrado na plataforma 🥺')
        }
        if (code === 400) {
            setMessage('danger', 'email já cadastradoinformações insconsistente 🥺')
        }
        if (code === 500) {
            setMessage('danger', 'servidor fora do ar, tente novamente mais tarde 🥺')
        }
    }

    function checkFields() {
        const camposGerais = ['nome', 'email', 'senha', 'telefone', 'tipoUsuario']

        if (errorMessage) setErrorMessage('');

        const checkedGeneralFields = camposGerais.every((item, index) => {
            if (!Boolean(campos[item])) {
                setMessage('danger', `O campo ${capitalizeCamelCase(item)} precisa ser preenchido`)
                return false
            }
            return true
        })

        if (checkedGeneralFields) {
            checkSpecificFields(campos.tipoUsuario)
        }


    }

    function checkSpecificFields(userType) {
        const camposAluno = ['curso', 'ra', 'instituicao', 'tipoAluno']
        const camposOrientadorELiderLab = ['curso', 'instituicao']
        const camposParceiros = ['empresa', 'cargo', 'cep', 'rua', 'bairro', 'numero', 'cidade', 'estado']

        if (userType === 'aluno') {
            camposAluno.every((item, index) => {
                if (!Boolean(campos[item])) {
                    setMessage('danger', `O campo ${capitalizeCamelCase(item)} precisa ser preenchido`)
                    return false
                }
                return true
            })
        }

        if ((userType === 'orientador') || (userType === 'lider_lab')) {
            camposOrientadorELiderLab.every((item, index) => {
                if (!Boolean(campos[item])) {
                    setMessage('danger', `O campo ${capitalizeCamelCase(item)} precisa ser preenchido`)
                    return false
                }
                return true
            })
        }

        if (userType === 'parceiro') {
            camposParceiros.every((item, index) => {
                if (!Boolean(campos[item])) {
                    setMessage('danger', `O campo ${capitalizeCamelCase(item)} precisa ser preenchido`)
                    return false
                }
                return true
            })
        }
    }

    function setMessage(variant, message) {
        setVariant(variant);
        setErrorMessage(message);
    }

    const Image = styled.div`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

    return (<>
        <div class="form-signup">
            <h2>
                <span> Inscreva-se </span>
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
                        Insira seu nome completo
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

                <Form.Group style={{marginTop: '1rem'}}>
                    <Form.Text className="text-muted">Tipo de usuário</Form.Text>
                    <div style={{marginTop: '1rem'}} key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            label="Aluno"
                            name="tipoUsuario"
                            type="radio"
                            id={`inline-radio-1`}
                            onChange={(e) => {
                                handleRadioButton(e, 'aluno')
                            }}
                        />
                        <Form.Check
                            inline
                            label="Orientador"
                            name="tipoUsuario"
                            type="radio"
                            id={`inline-radio-2`}
                            onChange={(e) => {
                                handleRadioButton(e, 'orientador')
                            }}
                        />
                        <Form.Check
                            inline
                            //disabled para disabilitar
                            label="Lider Lab"
                            name="tipoUsuario"
                            type="radio"
                            id={`inline-radio-3`}
                            onChange={(e) => {
                                handleRadioButton(e, 'lider_lab')
                            }}
                        />
                        <Form.Check
                            inline
                            label="Parceiro"
                            name="tipoUsuario"
                            type="radio"
                            id={`inline-radio-4`}
                            onChange={(e) => {
                                handleRadioButton(e, 'parceiro')
                            }}
                        />
                    </div>
                </Form.Group>

                {userType === 'aluno' && <>
                    <Form.Group className="mb-3" controlId="formBasicCurso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control
                            type="text"
                            name="curso"
                            id="curso"
                            placeholder="Curso"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o seu email
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRa">
                        <Form.Label>RA:</Form.Label>
                        <Form.Control
                            type="int"
                            name="ra"
                            id="ra"
                            placeholder="RA"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o seu RA
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicInstituicao">
                        <Form.Label>Instituição:</Form.Label>

                        <Form.Select
                            aria-label="instituicao select"
                            name="instituicao"
                            id="instituicao"
                            placeholder="Enstituicao"
                            onChange={handleInputChange}
                        >
                            <option className="text-muted">Selecione uma instituicao</option>
                            <option value="USJT">USJT</option>
                            <option value="UNIBH">UNIBH</option>
                        </Form.Select>

                        <Form.Text className="text-muted">
                            Instituição onde estuda
                        </Form.Text>
                    </Form.Group>

                    <Form.Group style={{marginTop: '1rem'}}>
                        <Form.Text className="text-muted">Você é</Form.Text>
                        <div
                            style={{
                                marginTop: '1rem', display: 'flex', flexDirection: 'column'
                            }}
                            key={`inline-radio`}
                            className="mb-3"
                        >
                            <Form.Check
                                inline
                                label="Aluno Formado"
                                name="tipoAluno"
                                type="radio"
                                id={`alunoFormado`}
                                onChange={(e) => {
                                    handleRadioButton(e, '', 'formado')
                                }}
                            />
                            <Form.Check
                                inline
                                label="Aluno da Ânima Educação"
                                name="tipoAluno"
                                type="radio"
                                id={`anima`}
                                onChange={(e) => {
                                    handleRadioButton(e, '', 'anima')
                                }}
                            />
                            <Form.Check
                                inline
                                //disabled para disabilitar
                                label="Aluno de outro grupo/instituição"
                                name="tipoAluno"
                                type="radio"
                                id={`outraInstituicao`}
                                onChange={(e) => {
                                    handleRadioButton(e, '', 'outra')
                                }}
                            />
                        </div>
                    </Form.Group>
                </>}
                {userType === 'orientador' && <>
                    <Form.Group className="mb-3" controlId="formBasicCurso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control
                            type="text"
                            name="curso"
                            id="curso"
                            placeholder="Curso"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o seu curso
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicInstituicao">
                        <Form.Label>Instituição:</Form.Label>

                        <Form.Select
                            aria-label="instituicao select"
                            name="instituicao"
                            id="instituicao"
                            placeholder="Enstituicao"
                            onChange={handleInputChange}
                        >
                            <option className="text-muted">Selecione uma instituicao</option>
                            <option value="USJT">USJT</option>
                            <option value="UNIBH">UNIBH</option>
                        </Form.Select>

                        <Form.Text className="text-muted">
                            Instituição onde leciona
                        </Form.Text>
                    </Form.Group>
                </>}

                {userType === 'lider_lab' && <>
                    <Form.Group className="mb-3" controlId="formBasicCurso">
                        <Form.Label>Curso:</Form.Label>
                        <Form.Control
                            type="text"
                            name="curso"
                            id="curso"
                            placeholder="Curso"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o seu curso
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicInstituicao">
                        <Form.Label>Instituição:</Form.Label>

                        <Form.Select
                            aria-label="instituicao select"
                            name="instituicao"
                            id="instituicao"
                            placeholder="Enstituicao"
                            onChange={handleInputChange}
                        >
                            <option className="text-muted">Selecione uma instituicao</option>
                            <option value="USJT">USJT</option>
                            <option value="UNIBH">UNIBH</option>
                        </Form.Select>

                        <Form.Text className="text-muted">
                            Instituição onde leciona
                        </Form.Text>
                    </Form.Group>
                </>}
                {userType === 'parceiro' && <>
                    <Form.Group className="mb-3" controlId="formBasicEmpresa">
                        <Form.Label>Empresa:</Form.Label>
                        <Form.Control
                            type="text"
                            name="empresa"
                            id="empresa"
                            placeholder="Empresa"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite o nome da sua empresa
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCargo">
                        <Form.Label>Cargo:</Form.Label>
                        <Form.Control
                            type="text"
                            name="cargo"
                            id="cargo"
                            placeholder="Cargo"
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Digite a sua posição de trabalho
                        </Form.Text>
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
                            Rua/Avenida do seu local de trabalho
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
                            Bairro do seu local de trabalho
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
                            Cidade do seu local de trabalho
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
                            Estado do seu local de trabalho
                        </Form.Text>
                    </Form.Group>
                </>}

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

                {errorMessage ? (<Alert variant={variant}>
                    {errorMessage}
                </Alert>) : ''}

                {loading ? (<div style={{marginBottom: '1rem'}}>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Carregando...
                    </Button>
                </div>) : ''}

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
    </>);
};

export default SignUp;