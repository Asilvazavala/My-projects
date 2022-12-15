import React, {useState} from 'react'
import '../estilos/DatosAvatar.css';
import { Avatar } from './Avatar';

export const DatosAvatar = () => {
    
  const [hobbies, setHobbies] = useState([]);
  const [nombre, setNombre] = useState();
  let [src, setSrc] = useState();

  const srcWomen = `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 30)}.jpg`;
  const srcMen = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 30)}.jpg`;
  

  const cambiarNombre = () => {
    if(document.getElementById("input-nombre").value === '') {
      alert('Debe añadir un nombre')
      document.getElementById("input-nombre").focus();  
    } else if (document.getElementById("input-masculino").checked === false && document.getElementById("input-femenino").checked === false) {
        alert('Debe seleccionar un género')
      } else if (document.getElementById('input-nombre').value.length > 15) {
          alert('El nombre debe ser menor a 15 carácteres')
          document.getElementById("input-nombre").focus(); 
        } else if (document.getElementById('input-masculino').checked === true) {
            setNombre(document.getElementById("input-nombre").value);
            document.getElementById("input-nombre").value = '';
            document.getElementById("input-nombre").focus();
            setSrc(srcMen);
          } else {
              setSrc(srcWomen);
              setNombre(document.getElementById("input-nombre").value);
              document.getElementById("input-nombre").value = '';
              document.getElementById("input-nombre").focus();
            }
  }

  const borrarNombre = () => {
    if(nombre === '') {
      alert('No hay nombre')
      document.getElementById("input-nombre").focus();
    } else {
        document.getElementById("input-nombre").value = '';
        setNombre(document.getElementById("input-nombre").value);
        document.getElementById("input-nombre").focus();
      }
  }

  const agregarHobbie = () => {
    if(document.getElementById("input-hobbie").value === '') {
      alert('Debe añadir un hobbie')
      document.getElementById("input-hobbie").focus();
    } else if (hobbies.length > 6) {
        alert('Se admiten 7 hobbies como máximo')
        document.getElementById("input-hobbie").focus();
      } else if (document.getElementById('input-hobbie').value.length > 30) {
          alert('El hobbie debe ser menor a 30 carácteres')
          document.getElementById("input-hobbie").focus();
        } else {
            setHobbies([...hobbies, document.getElementById("input-hobbie").value]);
            document.getElementById("input-hobbie").value = '';
            document.getElementById("input-hobbie").focus();
          }
  }

  const borrarHobbie = () => {
    if(hobbies.length === 0) {
      alert('No hay hobbies')
      document.getElementById("input-hobbie").value = '';
      document.getElementById("input-hobbie").focus();
    } 
      else {
        hobbies.pop(document.getElementById("input-hobbie").value);
        setHobbies([...hobbies]);
        document.getElementById("input-hobbie").value = '';
        document.getElementById("input-hobbie").focus();
      }
  }



    return (
    <div className='contenedor-datos-avatar'>
      <Avatar 
        size = {'small'} 
        name = {nombre} 
        src = {src}
      />

      <div className='nombre-avatar'>
        <h3>Mi nombre es: </h3>

        <input type="text" 
          className='input'
          id = "input-nombre" 
          placeholder="Nombre"></input>

        <button onClick={e => cambiarNombre(e.target.value)} 
          className = "boton boton-cambiar"
          >Cambiar </button>

        <button onClick={e => borrarNombre(e.target.value)} 
          className = "boton boton-nombre"
          > Borrar </button> 
      </div>

      <div className='genero-avatar'>
        <h3>Género:</h3>
        <input   
          type="radio"
          name="genero"
          value="masculino" 
          id = "input-masculino" 
        ></input>Masculino
        <br></br>

        <input type="radio"
          name="genero"
          value="femenino" 
          id = "input-femenino" ></input>Femenino
      </div>
        
      <div className='hobbies-avatar'>
        <h3>Mis Hobbies son:</h3>
        <input type="text" 
          className='input'
          id = "input-hobbie" 
          placeholder="Hobbie"></input>

        <button onClick={agregarHobbie} 
          className = "boton boton-cambiar"
          >Agregar </button>

        <button onClick={borrarHobbie} 
          className = "boton boton-nombre"
          > Borrar</button>

        <ul>
           {hobbies.map ((hobbie, indice) => {
            return (
              <li key={indice}>
                {indice + 1}.- {hobbie}
                  </li>
                    )
            }
                        )      
            }
        </ul>
      </div>
      <h5>Creador por: Antonio Silva</h5>
    </div>
  )
}
