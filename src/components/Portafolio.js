import React from 'react';
import { trabajos } from '../data/trabajos';

const Portafolio = () => {

  console.log("Array completo:", trabajos);

  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='trabajos'>

        {
        trabajos.map(trabajo => {
          console.log("Trabajo individual:", trabajo);

          return (
            <article key={trabajo.id} className='trabajo-item'>
              <h2>{trabajo.nombre}</h2>
              <p><strong>URL:</strong> {trabajo.url}</p>
              <p><strong>Tecnologías:</strong> {trabajo.tecnologias}</p>
              <p><strong>Categoría:</strong> {trabajo.categorias}</p>
              <div className='mask'>
                <img src={'/images/' + trabajo.id + '.png'}/>
              </div>
            </article>
          )
        })
      }

      </section>

      

    </div>
  )
}

export default Portafolio;
