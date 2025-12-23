/**
 * About component
 *
 * Seção sobre o desenvolvedor com descrição e foto
 */

import React from "react";
import { sobreMim } from "../data/mockData";

const About = () => {
  return (
    <section className="about" id="sobre-mim">
      <h2><span>#</span>sobre-mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{sobreMim.descricao}</p>
        </div>
        <div className="about-image">
          <img src={sobreMim.imagem} alt="Foto do desenvolvedor" />
        </div>
      </div>
    </section>
  );
};

export default About;
