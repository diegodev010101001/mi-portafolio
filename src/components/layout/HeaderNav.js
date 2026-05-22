import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/inicio',     label: 'Inicio' },
  { to: '/servicios',  label: 'Servicios' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/contacto',   label: 'Contacto' },
];

const HeaderNav = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

  const mobileNav = ReactDOM.createPortal(
    <nav className={`nav${menuOpen ? ' nav-open' : ''}`} aria-hidden={!menuOpen}>
      <ul className="nav-list" onClick={closeMenu}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>,
    document.body
  );

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">

          <Link to="/inicio" className="logo-text" onClick={closeMenu}>
            <span className="logo-acc">Dieg</span>oFdezC<span className="logo-acc">ode</span>
          </Link>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>
      {mobileNav}
    </>
  );
};

export default HeaderNav;
