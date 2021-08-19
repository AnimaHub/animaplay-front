export const convertInFormDataOneFile = (dados) => {
  const form = new FormData();

  const arquivo = document.getElementById(dados?.arquivo_id);

  if (arquivo) {
    form.append("arquivo", arquivo.files[0]);
  }

  form.append("dadosJSON", JSON.stringify(dados));

  return form;
};

export const convertInFormDataMultipleFile = (dados) => {
  const form = new FormData();

  const arquivo = document.getElementById(dados?.arquivo_id);

  if (arquivo) {
    Object.values(arquivo.files).forEach((element, index) => {
      form.append(element.nome + "_" + index, element);
    });
  }

  form.append("dadosJSON", JSON.stringify(dados));

  return form;
};
