import React from "react";
import Header from "../Componentes/Header";
import SideBar from "../Componentes/SideBar";
import Footer from "../Componentes/Footer";
import '../CSS/Home/Home.css';

function Home() {
  return (
    <main>
      <Header />
      <SideBar />
      <section className="homePage">
        <section className="homeContent">
          <h1 className="homeTitle">Bem Vindo(a) ao Treinamento HTL!</h1>
          <h2 className="homeText">
            Aqui você irá encontrar todo o aprendizado para começar sua carreira
            aqui na HTL!
          </h2>
          <h2 className="homeText">Aqui na esquerda estão todos os Módulos para complementar seus estudos.</h2>
          <h2 className="homeText">Caso seja sua primeira vez, clique no Módulo 1</h2>
          <h2 className="homeText">Se você já começou seu aprendizado, clique no Módulo que parou e continue estudando!</h2>
          <h1 className="homeH1">Bons Estudos!</h1>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
