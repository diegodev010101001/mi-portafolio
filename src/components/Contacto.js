import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      
      <form className='contact' action='mailto:diegofernandezmar@hotmail.com' method='POST' encType='text/plain'>
        <h1 className='heading'>Contacto</h1>
        <input type="text" placeholder='Nombre' name='Nombre' required/>
        <input type="text" placeholder='Apellidos' name='Apellidos' required />
        <input type="text" placeholder='Email' name='Email' required />
        <textarea placeholder='motivo de contacto' name='Mensaje' required />
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default Contacto
