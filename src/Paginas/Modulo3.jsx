import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo3.css';

function Modulo3 () {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo3Page">
        <section className="modulo3Content">
          <h1 className="modulo3Title">Módulo 3</h1>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo3;