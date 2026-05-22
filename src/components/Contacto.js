import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const FADE = {
  initial:    { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-50px' },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

const INITIAL_FORM = { nombre: '', apellidos: '', email: '', mensaje: '' };

const Contacto = () => {
  const [form, setForm]   = useState(INITIAL_FORM);
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setBusy(true);
    const subject = `Contacto de ${form.nombre} ${form.apellidos}`;
    const body    = `Nombre: ${form.nombre} ${form.apellidos}\nEmail: ${form.email}\n\n${form.mensaje}`;
    window.location.href =
      `mailto:diegofernandezmar@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setSent(true);
      setBusy(false);
      setForm(INITIAL_FORM);
    }, 800);
  }, [form]);

  return (
    <div className="page-wrap">
      <section className="page-section">
        <div className="contact-wrapper">

          {/* Info */}
          <motion.div className="contact-info" {...FADE}>
            <span className="section-label">Hablemos</span>
            <h1 className="section-title">
              ¿Tienes un proyecto<br />
              <span className="gradient-text">en mente?</span>
            </h1>
            <p>
              Estoy disponible para proyectos freelance y colaboraciones.
              Cuéntame tu idea y la convertimos en realidad.
            </p>
            <div className="contact-meta">
              <div className="contact-meta-item">
                <FiMail />
                <span>diegofernandezmar@hotmail.com</span>
              </div>
              <div className="contact-meta-item">
                <FiMapPin />
                <span>Aguascalientes, México</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            {...FADE}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {sent && (
              <div className="form-success">
                ¡Mensaje enviado! Me pondré en contacto contigo pronto.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="form-input"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  id="apellidos"
                  name="apellidos"
                  type="text"
                  className="form-input"
                  placeholder="Tus apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="form-input"
                placeholder="Cuéntame sobre tu proyecto..."
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={busy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend />
              {busy ? 'Enviando...' : 'Enviar mensaje'}
            </motion.button>
          </motion.form>

        </div>
      </section>
    </div>
  );
};

export default Contacto;
