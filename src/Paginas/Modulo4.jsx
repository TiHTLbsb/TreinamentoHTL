import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo4.css';

function Modulo4 () {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo4Page">
        <section className="modulo4Content">
          <h1 className="modulo4Title">Módulo 4</h1>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo4;