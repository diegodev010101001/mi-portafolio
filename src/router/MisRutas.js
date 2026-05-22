import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import HeaderNav from '../components/layout/HeaderNav';
import Footer    from '../components/layout/Footer';
import Inicio    from '../components/Inicio';
import Curriculum from '../components/Curriculum';
import Servicios  from '../components/Servicios';
import Contacto   from '../components/Contacto';

const PAGE_VARIANTS = {
  initial:  { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0  },
  exit:     { opacity: 0, y: -12 },
};

const PAGE_TRANSITION = { duration: 0.38, ease: [0.16, 1, 0.3, 1] };

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={PAGE_VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={PAGE_TRANSITION}
        style={{ width: '100%' }}
      >
        <Routes location={location}>
          <Route path="/"           element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio"     element={<Inicio />} />
          <Route path="/servicios"  element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto"   element={<Contacto />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const MisRutas = () => (
  <BrowserRouter>
    <HeaderNav />
    <main className="content">
      <AnimatedRoutes />
    </main>
    <Footer />
  </BrowserRouter>
);

export default MisRutas;
