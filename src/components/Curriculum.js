import React from 'react'
import { experiencias } from '../data/experiencias'
import { conocimientos } from '../data/conocimientos'
import {educaciones} from '../data/educaciones'

const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Curriculum</h1>
      <div className='curriculum'>
        {
      experiencias.map(experiencia => {
        return (
            <div className='curriculum-item'>
                  <h3>{experiencia.nombre}</h3>
                  <p>{experiencia.direccion}</p>
                  <div className='mask-curriculum'>
                    <img src= {`/images/${experiencia.imagen}`} />
                  </div>      
            </div>
        )
      })
    }
      </div>
      <div>
        <h1 className='heading'>Conocimientos</h1>
      </div>
      <div className='conocimientos'>
       {
      conocimientos.map(conocimiento => {
        return (
          <div className='conocimientos-item'>
            <div className='conocimientos-header'>
              <h3>{conocimiento.nombre}</h3>
              <img className='mask-conocimiento' src={`/images/${conocimiento.imagen}`} />
            </div>
            <p>{conocimiento.contenido}</p>
          </div>
        )
      })
    }
      </div>
      <div>
        <h1 className='heading'>Educación</h1>
      </div>
      <div className='educaciones'>
        {
          educaciones.map(educacion => {
            return(
              <div className='educaciones-item'>
                <h4>{educacion.nivel}</h4>
                <h3>{educacion.institucion}</h3>
                
                <h4>Periodo: {educacion.periodo}</h4>
                <div className='mask-educacion'>
                  <img src={`/images/${educacion.imagen}`} />
                </div>
                

              </div>
            )
          })
        }

      </div>
      



    </div>  
  )
}

export default Curriculum
