import React from 'react';
import '../hojas-de-estilo/Boton.css';

export const Boton = ({ children, manejarClic }) => {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.');
  }; 

  return(
    <div className={`boton-contenedor ${esOperador(children) ? 'operador' : null}`.trimEnd()}
      onClick={() => manejarClic(children)}>
      {children}
    </div>
  )
} 