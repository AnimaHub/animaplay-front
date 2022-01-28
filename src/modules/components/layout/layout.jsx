import React, {useState} from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";

const Layout = ({ children, user, setUser}) => {

    const [isUserLogged, setIsUserLogged] = useState(user.logado);
    const [userPermission, setUserPermission] = useState(user.tipoUsuario);

    const { rota, logado: logado, ...rest } = children;

  return (
    <>
      <Header isUserLogged={isUserLogged} setUserPermission={setUserPermission} setIsUserLogged={setIsUserLogged}/>
        {/*{console.log("AAAAAAQUI!!! " + children)}*/}
      {children}

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
      <Footer />
    </>
  );
}

export default Layout;
