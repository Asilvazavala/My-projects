import React, { useState } from "react";
import '../estilos/Contador.css'

export const Contador = () => {
    const [cont, SetCont] = useState(0);
    const [num, SetNum] = useState(0);

    return (
        <div className="contenedor-principal">
          <p></p>
          <p></p>
          
          <strong 
            className="contenedor">
            Contador: <strong className={ cont > 0 ? "verde" 
                                        : cont < 0 ? "rojo" 
                                        : ""}> 
                                        {cont} 
                                        </strong>
          </strong>

        <p></p>

        <button 
          onClick = {() => {
            SetCont(cont + 1);
            SetNum(num + 1);
            }}
          className="btn btn-sumar">
          Sumar
        </button>
        
        <button
          onClick={() => {
            SetCont(cont - 1);
            SetNum(num + 1);
            }}
          className="btn btn-restar">
          Restar
        </button>

        <p></p>

        <strong 
          className="contenedor">
          Número de clics: {num}
        </strong>

        <p></p>

        <button
          type="btn"
          onClick={() => {
            SetCont(0);
            SetNum(0);
            }}
          className="btn btn-reiniciar"
          >Reiniciar
        </button>

      <h4>Creado por: Antonio Silva</h4>
        </div>
    ) 
}