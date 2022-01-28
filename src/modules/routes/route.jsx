import React, {useState} from "react";
import Home from "../pages/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LaboratoryPage from "../pages/laboratory/laboratory-page";
import LaboratoryAbout from "../pages/laboratory/laboratorysAbout-page";
import ProjectPage from "../pages/projects/project-page";
import ProjectsAbout from "../pages/projects/projectsAbout-page";
import AboutPage from "../pages/about/about";
import Registration from "../components/registration/registration";

import Layout from "../components/layout/layout";
import PrivateRoute from "./private-route";
import AnimaPage from "../pages/anima/anima-page";
import {Usuario} from "../../services/usuario";

// Permission: "admin", "aluno", "orientador", "lider_lab", "parceiro"

const Routes = () => {
  var userObject = new Usuario();
  const [user, setUser] = useState(userObject);

  const Routes = [
    {
      pathRota: "/",
      component: Home,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
    {
      pathRota: "/anima",
      component: AnimaPage,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro"]
    },
    {
      pathRota: "/laboratorio/:id",
      component: LaboratoryPage,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
    {
      pathRota: "/laboratorios",
      component: LaboratoryAbout,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
      //permission: ["lider_lab"],
    },
    {
      pathRota: "/projeto/:id",
      component: ProjectPage,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
    {
      pathRota: "/projeto",
      component: ProjectsAbout,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
    {
      pathRota: "/sobre",
      component: AboutPage,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
    {
      pathRota: "/inscricao",
      component: Registration,
      permission: ["admin", "aluno", "orientador", "lider_lab", "parceiro", undefined]
    },
  ];
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          <Layout user={user} setUser={setUser}>
            {Routes.map((rota) =>
              rota.permission.includes(user.tipoUsuario) ? (
                <Route exact path={rota.pathRota} component={rota.component} />
              ) : (
                <PrivateRoute
                  rota={rota}
                  path={rota.pathRota}
                  component={rota.component}
                />
              )
            )}
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
