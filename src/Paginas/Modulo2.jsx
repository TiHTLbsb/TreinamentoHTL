import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo2.css';

function Modulo2 () {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo2Page">
        <section className="modulo2Content">
          <h1 className="modulo2Title">Módulo 2</h1>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo2;