import React from 'react'
import {Link} from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Diego Fernández y soy <strong>Desarrollador Web</strong> en Aguascalientes Mexico, y ofrezco mis servicios de <strong>Programacion</strong> y desarrollo en todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener más visibilidad y relevancia en internet. 
      </h2>
      <div className='link-contacto'>
        <Link to = "/contacto">Contacta connmigo.</Link>
      </div>
    </div>
  )
}

export default Inicio
