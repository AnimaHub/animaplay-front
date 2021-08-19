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
