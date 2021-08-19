import axiosInstance from "../utils/axios-instance";
import { convertInFormDataMultipleFile } from "../utils/utils";

export const cadastrarProjeto = async (projeto) => {
  return await axiosInstance
    .post(`/projeto`, convertInFormDataMultipleFile(projeto))
    .then((reponse) => {
      return reponse.data.dados;
    })
    .catch((err) => {
      return err.message;
    });
};

export const listarProjeto = async (projeto) => {
  return await axiosInstance
    .get(`/projeto`, projeto)
    .then((reponse) => {
      return reponse.data.dados;
    })
    .catch((err) => {
      return err.message;
    });
};

/* {
    nome: "Projeto de teste",
    data_inicial: "14/09/2021",
    data_final: "14/12/2021",
    descricao: "Projeto descricao",
    categoria: "extensao",
    carga_horaria: 125,
    status_projeto: "aguardando_publicacao",
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
