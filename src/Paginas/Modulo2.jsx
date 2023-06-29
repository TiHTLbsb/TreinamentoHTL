import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SideBar from '../Componentes/SideBar';
import '../CSS/Modulos/Modulo2.css';
import pagina1 from '../Imagens/Modulo 2/Crédito consignado-1_page-0001.jpg';
import pagina2 from '../Imagens/Modulo 2/Crédito consignado-2_page-0001.jpg';
import pagina3 from '../Imagens/Modulo 2/Crédito consignado-3_page-0001.jpg';
import ReactPlayer from "react-player";

function Modulo2 () {
  const videoUrl = "https://vimeo.com/840978609";
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo2Page">
        <section className="modulo2Content">
          <h1 className="modulo2Title">Módulo 2</h1>
          <ReactPlayer url={videoUrl} controls height="580px" width="95%" marginLeft="2%"/>
          <iframe
            title="Video Módulo 2"
            src="https://www.youtube.com/embed/d2vENdmRRPU"
            className="videoMod2"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <img src={pagina1} alt='pagina 1' className="paginaMod2"/>
          <img src={pagina2} alt='pagina 2' className="paginaMod2"/>
          <img src={pagina3} alt='pagina 3' className="paginaMod2"/>
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Modulo2;