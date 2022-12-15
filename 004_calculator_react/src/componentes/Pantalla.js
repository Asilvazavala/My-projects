import React from "react";
import '../hojas-de-estilo/Pantalla.css';

export const Pantalla = ({ input, manejarCambio }) => {
  return (
    <div 
      className='input'
      onChange={e => manejarCambio(e.target.value)}>
      {input}
    </div>
  )
}