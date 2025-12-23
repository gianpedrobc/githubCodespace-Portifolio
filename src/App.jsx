/**
 * Application component
 *
 * Componente principal que estrutura o portfólio
 */

import React from "react";
import useScrollReveal from "./hooks/useScrollReveal";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { siteProps, colors } from "./data/mockData";

import "./styles.css";

const App = () => {
  // Carrega ScrollReveal para animações
  useScrollReveal();

  return (
    <div id="main">
      <Header />
      <main>
        <Home />
        <div className="container">
          <Projects />
          <Skills />
          <Certificates />
          <About />
        </div>
      </main>
      <Footer {...siteProps} primaryColor={colors.primary} secondaryColor={colors.secondary} />
    </div>
  );
};

export default App;
