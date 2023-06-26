import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import SideBar from "../Componentes/SideBar";
import "../CSS/Modulos/Modulo3.css";
import pagina1 from "../Imagens/Modulo 3/Crédito Não Consignado-1_page-0001.jpg";
import pagina2 from "../Imagens/Modulo 3/Crédito Não Consignado-2_page-0001.jpg";

function Modulo3() {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="modulo3Page">
        <section className="modulo3Content">
          <h1 className="modulo3Title">Módulo 3</h1>
          <iframe
            title="Video Módulo 3"
            src="https://www.youtube.com/embed/nx6T4sD5QeE"
            className="videoMod3"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <img src={pagina1} alt="pagina 1" className="paginaMod3" />
          <img src={pagina2} alt="pagina 2" className="paginaMod3" />
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Modulo3;
