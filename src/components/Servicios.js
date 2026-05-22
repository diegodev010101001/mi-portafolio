import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiCode, FiBarChart2 } from 'react-icons/fi';

const SERVICES = [
  {
    num:  '01',
    icon: <FiLayout />,
    title: 'Diseño Web',
    desc:  'Diseño interfaces atractivas, modernas y centradas en el usuario. Tu web comunicará tu marca con claridad y elegancia.',
  },
  {
    num:  '02',
    icon: <FiCode />,
    title: 'Desarrollo Web',
    desc:  'Construyo tu sitio o aplicación desde cero con tecnologías modernas como React. Código limpio, rápido y listo para producción.',
  },
  {
    num:  '03',
    icon: <FiBarChart2 />,
    title: 'Posicionamiento Web',
    desc:  'Optimizo tu sitio para aparecer en Google y atraer tráfico real. Más visibilidad, más clientes, más impacto en internet.',
  },
];

const CARD_VARIANTS = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0  },
};

const Servicios = () => (
  <div className="page-wrap">
    <section className="page-section">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-label">Lo que hago</span>
        <h1 className="section-title">Mis Servicios</h1>
      </motion.div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.num}
            className="service-card"
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <span className="service-num">{s.num}</span>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  </div>
);

export default Servicios;
