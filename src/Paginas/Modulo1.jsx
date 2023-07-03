import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import SideBar from "../Componentes/SideBar";
import pagina1 from "../Imagens/Modulo 1/SobreNos.jpg";
import "../CSS/Modulos/Modulo1.css";

function Modulo1() {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo1Page">
        <section className="modulo1Content">
          <h1 className="modulo1Title">Módulo 1</h1>
          <img src={pagina1} alt="Sobre Nós" className="paginaMod1"/>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Modulo1;
