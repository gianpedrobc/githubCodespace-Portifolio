/**
 * Certificates component
 *
 * Exibe certificações e credenciais do desenvolvedor
 */

import React from "react";
import { certificados } from "../data/mockData";

const Certificates = () => {
  return (
    <section className="certifications" id="certificados">
      <h2><span>#</span>Certificados</h2>
      <div className="certifications-grid">
        {certificados.length > 0 ? (
          certificados.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="cert-issuer">{cert.emissor}</div>
              <h3>{cert.titulo}</h3>
              <p>Competências: {cert.competencias}</p>
              {cert.link && (
                <a href={cert.link} className="btn-verify" target="_blank" rel="noopener noreferrer">
                  Ver Credencial <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum certificado cadastrado ainda.</p>
        )}
      </div>
    </section>
  );
};

export default Certificates;
