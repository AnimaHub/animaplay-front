import React, {useState} from "react";
import {Form, Button, ProgressBar} from "react-bootstrap";
import {setNewPassword} from "../../../services/usuario";

const styleSheet = {
    margin: '4rem auto',
    maxWidth: '60%',
    width: '100%'
}

const RecoveryPassForm = () => {

    const [progress, setprogress] = useState(1);
    const [IsButtonInactive, setIsButtonInactive] = useState(false);
    const [campos, setCampos] = useState({
        primeiraSenha: '',
        segundaSenha: '',
        token: ''
    });

    const [placeholderMessage, setPlaceholderMessage] = useState('We\'ll never share your information with anyone else.');

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);

        if (placeholderMessage === 'As senhas não iguais') {
            setPlaceholderMessage('Toma toma VAPO VAPO! 🕺');
        }

        if (progress !== 0) {
            setprogress(0);
        }

    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        setprogress(10);
        if (campos.segundaSenha === '' || campos.primeiraSenha === '' || campos.token === '') {
            setPlaceholderMessage('Todos os campos devem ser preenchidos');
        } else if (campos.primeiraSenha !== campos.segundaSenha) {
            setPlaceholderMessage('As senhas não iguais');
        } else {
            setprogress(80);
            setIsButtonInactive(true);
            const info = {
                token: campos.token,
                senha: campos.primeiraSenha
            }
            const response = await setNewPassword({...info});
            if (response.message) {
                setPlaceholderMessage(response.message);
            }
            if (response.message !== 'Senha atualizada com suscesso') {
                setIsButtonInactive(false);
            } else {
                setprogress(100);
            }
        }
    }

    return (
        <>
            <Form style={styleSheet}>
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Nova senha para uso na plataforma</Form.Label>
                    <Form.Control
                        type="password"
                        name="primeiraSenha"
                        placeholder="Insira a nova senha"
                        onChange={handleInputChange}
                    />
                    <Form.Text className="text-muted">
                        {placeholderMessage}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirme a senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="segundaSenha"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicToken">
                    <Form.Control
                        style={{marginTop: '30px'}}
                        type="text"
                        name="token"
                        placeholder="Informe o token enviado por email  😎"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <ProgressBar style={{maxWidth: '100%', margin: '30px 0 15px 0'}} animated now={progress}/>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={handleFormSubmit}
                    disabled={IsButtonInactive}
                >
                    Enviar
                </Button>
            </Form>
        </>
    );
}

export default RecoveryPassForm;