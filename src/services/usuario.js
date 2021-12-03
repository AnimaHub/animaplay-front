import axiosInstance from "../utils/axios-instance";
import { salvarUsuario, limparUsuario } from "../utils/storege";
import {convertInFormData} from "../utils/utils";

export const login = async ({ email, senha, tipo_usuario }) => {
  return await axiosInstance
    .post(`/usuario/login/${tipo_usuario}`, { email: email, senha: senha })
    .then((reponse) => {
      salvarUsuario({
        jwt: reponse.data.dados.jwt,
        usuario: reponse.data.dados.usuario,
      });
      return reponse.data.dados.usuario;
    })
    .catch((err) => {
      return err.message;
    });
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
    constructor() {
        this.nome = "Usuario de teste"
        this.email = "teste@teste.com"
        this.senha = "oloco"
        this.telefone = "31 99566-8243"
        this.tipo_usuario = "admin"
        this.logado = false
        this.endereco = new Endereco(
            "96830-260", "Rua Padre José Belzer", "Arroio Grande",
            "298", "Santa Cruz do Sul", "RS",
            "https://animaeducacao.zoom.us/j/82475918671", "fisico")
    }
}

export class Endereco {

    constructor(cep, rua, bairro, numero, cidade, estado, link, tipo) {
        this.cep = cep
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.link = link
        this.tipo = tipo
    }

}
/* {
    "nome": "Usuario de teste",
    "email": "teste@teste.com",
    "senha": "oloco",
    "telefone": "31 99566-8243",
    "tipo_usuario": "admin",
    "endereco": {
      "cep": "96830-260",
      "rua": "Rua Padre José Belzer",
      "bairro": "Arroio Grande",
      "numero": "298",
      "cidade": "Santa Cruz do Sul",
      "estado": "RS",
      "link": "https://animaeducacao.zoom.us/j/82475918671",
      "tipo": "fisico"
    }
  } */
