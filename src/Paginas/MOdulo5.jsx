import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo5.css';
import ReactPlayer from "react-player";

function Modulo5 () {
  const videoUrl = "https://vimeo.com/841231378";
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo5Page">
        <section className="modulo5Content">
          <h1 className="modulo5Title">Módulo 5</h1>
          <ReactPlayer url={videoUrl} controls height="580px" width="95%" marginLeft="2%"/>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo5;