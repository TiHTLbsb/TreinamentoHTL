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
          <iframe
            title="Video Módulo 4"
            src="https://www.youtube.com/embed/9PbjUc4d-eY"
            className="videoMod4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo4;