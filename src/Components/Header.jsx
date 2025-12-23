/**
 * Header component
 *
 * Barra de navegação fixa no topo da página
 */
import React from "react";
import { apresentacao, siteProps } from "../data/mockData";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">{apresentacao.nome}</a>
        </div>
        <nav className="nav">
          <a href="#home">#home</a>
          <a href="#projetos">#projetos</a>
          <a href="#skills">#skills</a>
          <a href="#certificados">#certificados</a>
          <a href="#sobre-mim">#sobre-mim</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
