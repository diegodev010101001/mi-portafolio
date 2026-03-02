import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi"; // icono hamburguesa

const HeaderNav = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className='header'>

      <img
        className='logo'
        src="/images/milogo.png"
        alt="Logo Diego Fernández Web"
      />

      {/* ICONO HAMBURGUESA */}
      <button
        className='abrir-menu'
        onClick={() => setMenuAbierto(true)}
      >
        <FiMenu size={37} />
      </button>

      {/* NAV */}
      <nav className={`nav ${menuAbierto ? "visible" : ""}`}>

        <ul className='nav-list' onClick={cerrarMenu}>

          <li>
            <NavLink to='/inicio'
              className={({ isActive }) => isActive ? 'active' : ''}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to='/servicios'
              className={({ isActive }) => isActive ? 'active' : ''}>
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink to='/curriculum'
              className={({ isActive }) => isActive ? 'active' : ''}>
              Curriculum
            </NavLink>
          </li>

          <li>
            <NavLink to='/contacto'
              className={({ isActive }) => isActive ? 'active' : ''}>
              Contacto
            </NavLink>
          </li>

        </ul>
      </nav>

    </header>
  );
};

export default HeaderNav;