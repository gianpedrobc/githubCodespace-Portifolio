/**
 * Projects component
 *
 * Exibe grid de projetos desenvolvidos
 */

import React from "react";
import { projetos } from "../data/mockData";

const Projects = () => {
  return (
    <section className="projects" id="projetos">
      <h2><span>#</span>projetos</h2>
      <div className="project-grid">
        {projetos.length > 0 ? (
          projetos.map((projeto) => (
            <div key={projeto.id} className="project-card">
              <div className="card-tags">{projeto.tags}</div>
              <div className="card-content">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                {projeto.imagem && (
                  <img src={projeto.imagem} alt={projeto.titulo} />
                )}
                {projeto.link && (
                  <a href={projeto.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Github <i className="fa-brands fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum projeto cadastrado ainda.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
