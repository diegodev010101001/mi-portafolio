import React from 'react';
import { motion } from 'framer-motion';
import { experiencias } from '../data/experiencias';
import { conocimientos } from '../data/conocimientos';
import { educaciones }   from '../data/educaciones';

const SECTION_ANIM = {
  initial:    { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const cardAnim = (i) => ({
  initial:    { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-30px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
});

const Curriculum = () => (
  <div className="page-wrap">

    {/* ── Experiencia ─────────────────────────────────── */}
    <section className="page-section">
      <motion.div className="section-header" {...SECTION_ANIM}>
        <span className="section-label">Trayectoria</span>
        <h1 className="section-title">Experiencia</h1>
      </motion.div>

      <div className="exp-grid">
        {experiencias.map((exp, i) => (
          <motion.div key={exp.id} className="exp-card" {...cardAnim(i)} whileHover={{ y: -5 }}>
            <img src={`/images/${exp.imagen}`} alt={exp.nombre} className="exp-logo" />
            <h3>{exp.nombre}</h3>
            <p>{exp.direccion}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── Conocimientos (alternate bg) ────────────────── */}
    <div className="section-bg-alt">
      <section className="page-section">
        <motion.div className="section-header" {...SECTION_ANIM}>
          <span className="section-label">Habilidades</span>
          <h2 className="section-title">Conocimientos</h2>
        </motion.div>

        <div className="skills-grid">
          {conocimientos.map((skill, i) => (
            <motion.div key={skill.id} className="skill-card" {...cardAnim(i)} whileHover={{ y: -5 }}>
              <div className="skill-header">
                <img src={`/images/${skill.imagen}`} alt={skill.nombre} className="skill-icon" />
                <h3>{skill.nombre}</h3>
              </div>
              <p>{skill.contenido}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>

    {/* ── Educación ───────────────────────────────────── */}
    <section className="page-section">
      <motion.div className="section-header" {...SECTION_ANIM}>
        <span className="section-label">Formación</span>
        <h2 className="section-title">Educación</h2>
      </motion.div>

      <div className="edu-list">
        {educaciones.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="edu-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            whileHover={{ x: 6 }}
          >
            <img src={`/images/${edu.imagen}`} alt={edu.institucion} className="edu-logo" />
            <div className="edu-info">
              <p className="edu-level">{edu.nivel}</p>
              <h4>{edu.institucion}</h4>
              <p className="edu-period">{edu.periodo}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  </div>
);

export default Curriculum;
