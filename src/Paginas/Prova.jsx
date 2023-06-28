import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import SideBar from "../Componentes/SideBar";
import '../CSS/Prova/Prova.css';

function Prova () {
  return(
    <main>
      <Header />
      <SideBar />
      <div className="provaPage">
        <div className="provaContent">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfvGB2hr4SRizMHXa_c5w4bh3mVXWvuGp54sr28mCqZHCalaQ/viewform?embedded=true"
            title="Prova"
            className="prova"
            width="640"
            height="4416"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            A carregar…
          </iframe>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Prova;