import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { checkAuthorization } from "../../services/usuario";
import { getUsuario, limparUsuario } from "../../utils/storege";

import Loading from "../components/loading/loading";

const checkPermission = async (rota) => {
  let UsuarioDados = getUsuario();

  if (UsuarioDados) {
    const respostaCheckToken = await checkAuthorization(
      UsuarioDados?.tipo_usuario
    );

    if (!respostaCheckToken) {
      limparUsuario();
      UsuarioDados = undefined;
    }

    if (
      !respostaCheckToken ||
      !rota.permission.includes(UsuarioDados?.tipo_usuario)
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const PrivateRoute = (props) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { rota, component: Component, ...rest } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await checkPermission(rota);

      setIsAuthenticated(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Component {...props} />
        ) : loading ? (
          <Loading />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
