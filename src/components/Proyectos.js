import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiArrowUpRight } from 'react-icons/fi';
import { proyectos } from '../data/proyectos';

const CARD_VARIANTS = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0  },
};

const Proyectos = () => (
  <section className="page-section">

    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="section-label">Portafolio</span>
      <h2 className="section-title">Sitios web que he desarrollado</h2>
    </motion.div>

    <div className="portfolio-grid">
      {proyectos.map((p, i) => (
        <motion.a
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={CARD_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
          whileHover={{ y: -8 }}
        >
          <div className="project-image">
            <div className="project-browser-bar">
              <span className="browser-dot browser-dot-red" />
              <span className="browser-dot browser-dot-yellow" />
              <span className="browser-dot browser-dot-green" />
              <span className="browser-url">{p.dominio}</span>
            </div>
            {p.imagen ? (
              <img
                src={`/images/${p.imagen}`}
                alt={`Vista previa del sitio ${p.nombre}`}
                className="project-img"
              />
            ) : (
              <div className="project-placeholder">
                <FiGlobe className="project-placeholder-icon" />
              </div>
            )}
            <div className="project-overlay">
              <span className="project-link">
                Ver sitio <FiArrowUpRight />
              </span>
            </div>
          </div>
          <div className="project-info">
            <span className="project-category">{p.categoria}</span>
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <div className="tech-tags">
              {p.tecnologias.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>

  </section>
);

export default Proyectos;
