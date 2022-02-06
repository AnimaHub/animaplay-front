import React from 'react';
import RecoveryPassForm from "../../components/recoverPass/recoverPassForm";
import CarouselPage from "../../components/carousel/carousel";
import Project from "../projects/components/caroulselProject";

const css = {
    height: '42.7vh',
}

const Recovery = () => {
    return (
      <>
          <RecoveryPassForm/>
          <div style={css}></div>
      </>
    );
}

export default Recovery;