import axiosInstance from "../utils/axios-instance";
import {convertInFormDataOneFile} from "../utils/utils";

export const cadastrarLaboratorio = async (laboratorio) => {
  return await axiosInstance
    .post(`/laboratorio`, convertInFormDataOneFile(laboratorio))
    .then((reponse) => {
      return reponse.data.dados;
    })
    .catch((err) => {
      return err.message;
    });
};

export const listarLaboratorio = async (laboratorio) => {
  return await axiosInstance
    .get(`/laboratorio`, laboratorio)
    .then((reponse) => {
      return reponse.data.dados;
    })
    .catch((err) => {
      return err.message;
    });
};

/* {
    nome: "Usuario de teste",
    email: "teste@teste.com",
    telefone: "31 99566-8243",
    endereco: {
      cep: "96830-260",
      rua: "Rua Padre José Belzer",
      bairro: "Arroio Grande",
      numero: "298",
      cidade: "Santa Cruz do Sul",
      estado: "RS",
      link: "https://animaeducacao.zoom.us/j/82475918671",
      tipo: "fisico",
    },
  } */
