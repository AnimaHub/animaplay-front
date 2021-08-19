import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.div`
    background-image: linear-gradient(to right, #6b2481, #a30f77);
    border-top: 10px solid #fff;
    bottom: 0;
    left: 0;
    height: 40px;
    position: relative;
    width: 100%;
    text-align: center;
  `;

  const TxtFooter = styled.a`
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
  `;

  return (
    <Footer>
      <TxtFooter href="https://sites.google.com/prof.unibh.br/animahub">
        AnimaHub - Todos os Direitos Reservados - 2021
      </TxtFooter>
    </Footer>
  );
};

export default Footer;
