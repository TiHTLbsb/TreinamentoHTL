import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import SideBar from "../Componentes/SideBar";
import "../CSS/Modulos/Modulo4.css";
import ReactPlayer from "react-player";

function Modulo4() {
  const videoUrl = "https://vimeo.com/841005369";
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo4Page">
        <section className="modulo4Content">
          <h1 className="modulo4Title">Módulo 4</h1>
          <ReactPlayer url={videoUrl} controls height="580px" width="95%" marginLeft="2%"/>
          <iframe
            title="Video Módulo 4"
            src="https://www.youtube.com/embed/9PbjUc4d-eY"
            className="videoMod4"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            title="Video Módulo 4"
            src="https://www.youtube.com/embed/PfdzBOZurRg"
            className="videoMod4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Modulo4;
