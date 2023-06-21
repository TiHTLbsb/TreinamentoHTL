import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo6.css';

function Modulo6 () {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo6Page">
        <section className="modulo6Content">
          <h1 className="modulo6Title">Módulo 6</h1>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo6;