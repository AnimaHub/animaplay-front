import axiosInstance from "../utils/axios-instance";
import {salvarUsuario} from "../utils/storege";
import {capitalize} from './string';

async function httpRequestCode({headers, body, uri, method}) {
    let status = 0;
    const content = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, {
        method: method, headers: headers, body: body
    }).then(r => status = r.status)

    return status;
}

async function httpRequest({headers, body, uri, method}) {
    let content;
    await (async () => {
        const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, {
            method: method, headers: headers, body: body
        });

        content = await rawResponse.json();
        console.log(' inside ', content)
    })();

    return content;
}

export const setNewPassword = async ({token, senha}) => {
    const headers = {
        'Accept': 'application/json', 'Content-Type': 'application/json', 'x-access-token': token
    };
    const body = JSON.stringify({senha: senha});
    const uri = 'users/password/new';
    const method = 'PUT';
    return await httpRequest({headers, body, uri, method});
}

export const recoveryPassword = async ({email}) => {
    const headers = {
        'Accept': 'application/json', 'Content-Type': 'application/json'
    };
    const body = JSON.stringify({email: email});
    const uri = 'users/password/recovery';
    const method = 'POST';

    return await httpRequest({headers, body, uri, method});
}

export const login = async ({email, senha}) => {
    const headers = {
        'Accept': 'application/json', 'Content-Type': 'application/json'
    };
    const body = JSON.stringify({email: email, senha: senha});
    const uri = 'users/login';
    const method = 'POST';

    let content = await httpRequest({headers, body, uri, method});

    if (content.dados) {
        salvarUsuario({
            jwt: content.dados.jwt, usuario: content.dados.usuario,
        });
    }

    return content;
};

export const signUp = async (usuario) => {
    const headers = {
        'Accept': 'application/json', 'Content-Type': 'application/json'
    };

    const nome = capitalize(usuario.nome);

    const body = JSON.stringify({
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        telefone: usuario.telefone,
        foto: usuario.foto,
        tipo_usuario: usuario.tipoUsuario,
        ra: usuario.ra,
        curso: usuario.curso,
        instituicao: usuario.instituicao,
        tipo_aluno: usuario.tipoAluno,
        empresa: usuario.empresa,
        cargo: usuario.cargo,
        endereco: {
            cep: usuario.cep,
            rua: usuario.rua,
            bairro: usuario.bairro,
            numero: usuario.numero,
            cidade: usuario.cidade,
            estado: usuario.estado,
            tipo: 'fisico'
        }
    });

    const uri = 'users';
    const method = 'POST';

    return await httpRequestCode({headers, body, uri, method});
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