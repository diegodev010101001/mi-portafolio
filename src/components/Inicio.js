import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FADE_UP = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0  },
};

const STAGGER = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const ITEM_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const Inicio = () => {
  const orb1Ref    = useRef(null);
  const orb2Ref    = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    if (orb1Ref.current)    orb1Ref.current.style.transform    = `translate(${x * 28}px, ${y * 28}px)`;
    if (orb2Ref.current)    orb2Ref.current.style.transform    = `translate(${x * -20}px, ${y * -20}px)`;
    if (contentRef.current) contentRef.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
  }, []);

  return (
    <section className="hero" onMouseMove={handleMouseMove}>

      {/* Animated background */}
      <div className="hero-bg">
        <div className="orb orb-1" ref={orb1Ref} />
        <div className="orb orb-2" ref={orb2Ref} />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        ref={contentRef}
        variants={STAGGER}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-eyebrow" variants={FADE_UP} transition={ITEM_TRANSITION}>
          Desarrollador Web · Aguascalientes, México
        </motion.span>

        <motion.h1 className="hero-title" variants={FADE_UP} transition={ITEM_TRANSITION}>
          Hola, soy<br />
          <span className="gradient-text">Diego&nbsp;Fernández</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={FADE_UP} transition={ITEM_TRANSITION}>
          Creo sitios y aplicaciones web modernas que conectan
          negocios con sus clientes. Programación y desarrollo
          para todo tipo de proyectos.
        </motion.p>

        <motion.div className="hero-cta" variants={FADE_UP} transition={ITEM_TRANSITION}>
          <Link to="/contacto" className="btn btn-primary">
            Trabajemos juntos
          </Link>
          <Link to="/portafolio" className="btn btn-secondary">
            Ver proyectos →
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Inicio;
