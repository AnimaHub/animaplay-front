export const salvarUsuario = ({ usuario, jwt }) => {
  localStorage.setItem("usuario", JSON.stringify({ dados: usuario, jwt: jwt }));
};

export const limparUsuario = () => {
  localStorage.clear();
};

export const getUsuario = () => {
  return JSON.parse(localStorage.getItem("usuario"))?.dados;
};

export const getJwt = () => {
  return JSON.parse(localStorage.getItem("usuario"))?.jwt;
};
