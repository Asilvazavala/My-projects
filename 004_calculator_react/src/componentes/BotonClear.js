import React from "react";
import '../hojas-de-estilo/BotonClear.css';

export const BotonClear = ({ children, manejarClear }) => {
  return (
    <div 
      className='boton-clear'
      onClick={() => manejarClear(children)}>
      {children}
    </div>
  )
}