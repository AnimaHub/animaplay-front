import React from "react";
import styled from "styled-components";

const currentYear = new Date().getFullYear();
const css = {
    position: 'absolute',
    bottom: '0',
    left: '0',
}

const Footer = () => {

    const Footer = styled.div`
      background-image: linear-gradient(to right, #5d388d, #a01745, #f0804c);
      bottom: 0;
      left: 0;
      height: 85px;
      position: relative;
      width: 100%;
      text-align: center;
      box-shadow: 0 4px 26px 5px rgb(0 0 0 / 55%);
    `;

    const TxtFooter = styled.a`
      color: #ffffff;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-size: 12px;
      position: relative;
      text-decoration: none;
      top: 2em;

      &:hover {
        color: #cec3dd
      }
    `;

    return (
        <Footer>
            <TxtFooter href="https://sites.google.com/prof.unibh.br/animahub">
                AnimaHub - Todos os Direitos Reservados - {currentYear}
            </TxtFooter>
        </Footer>
    );
};

export default Footer;
