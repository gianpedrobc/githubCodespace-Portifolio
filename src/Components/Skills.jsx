/**
 * Skills component
 *
 * Exibe habilidades e competências do desenvolvedor por categoria
 */

import React from "react";
import { skills } from "../data/mockData";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2><span>#</span>skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-box">
            <h4>{skill.categoria}</h4>
            <p>{skill.habilidades}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
