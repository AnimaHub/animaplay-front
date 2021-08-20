import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";

const Layout = ({ children }) => {
  console.log({...children})
  return (
    <>
      <Header/>

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
};

export default Layout;
