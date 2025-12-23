/**
 * Home component
 *
 * Apresentação principal do portfólio com informações do desenvolvedor
 */

import React from "react";
import { apresentacao } from "../data/mockData";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>{apresentacao.nome}: {apresentacao.titulo}</h1>
        <p>{apresentacao.descricao}</p>
        <a href={apresentacao.link_contato} className="btn">Entrar em contato</a>
      </div>
      <div className="home-image">
        <img src={apresentacao.imagem} alt={`Foto de ${apresentacao.nome}`} />
      </div>
    </section>
  );
};

export default Home;
