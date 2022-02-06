import axiosInstance from "../utils/axios-instance";
import {salvarUsuario, limparUsuario} from "../utils/storege";
import {convertInFormData} from "../utils/utils";
import {map} from "react-bootstrap/ElementChildren";


async function httpRequest({headers, body, uri, method}) {
    let content;
    await (async () => {
        const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, {
            method: method,
            headers: headers,
            body: body
        });

        content = await rawResponse.json();
    })();

    return content;
}

export const setNewPassword = async ({token, senha}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
    };
    const body = JSON.stringify({senha: senha});
    const uri = 'usuario/password/new';
    const method = 'PUT';
    return await httpRequest({headers, body, uri, method});
}

export const recoveryPassword = async  ({email}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({email: email});
    const uri = 'usuario/password/recovery';
    const method = 'POST';

    return await httpRequest({headers, body, uri, method});
}

export const login = async ({email, senha}) => {
    let content;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({email: email, senha: senha});
    const uri = 'usuario/login';
    const method = 'POST';

    content = await httpRequest({headers, body, uri, method});

    if (content.dados) {
        salvarUsuario({
            jwt: content.dados.jwt,
            usuario: content.dados.usuario,
        });
    }

    return content;
};

export const cadastro = async (usuario) => {
    return await axiosInstance
        .post(`/usuario`, usuario)
        .then((reponse) => {
            return reponse.data.dados;
        })
        .catch((err) => {
            return err.message;
        });
};

export const checkAuthorization = async (tipo_usuario) => {
    return await axiosInstance
        .post(`/token/${tipo_usuario}`)
        .then((reponse) => {
            return true;
        })
        .catch((err) => {
            return false;
        });
};

export class Usuario {
    constructor(id, nome, tipoUsuario, idAdmin) {
        this.id = id
        this.idAdministrador = idAdmin
        this.nome = nome
        this.email = null
        this.senha = null
        this.telefone = null
        this.tipoUsuario = tipoUsuario
        this.logado = false
        this.endereco = new Endereco(null, null, null, null, null, null, null, null)
    }
}

export class Endereco {

    constructor(cep, rua, bairro, numero, cidade, estado, link, tipo) {
        this.cep = cep
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        this.link = link
        this.tipo = tipo
    }

}