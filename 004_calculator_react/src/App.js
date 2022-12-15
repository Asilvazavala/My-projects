import './App.css';
import {Boton} from './componentes/Boton';
import {Pantalla} from './componentes/Pantalla';
import {BotonClear} from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';
import imagenDelete from './imagenes/delete-left-solid.svg'; 

// Agregar nuevo componente y ahi agregar una imagen, renderizarlo aqui
// Errores 1.- 111,222    2.-Cambiar de + a -    
// 3.-Pantalla chica con numeros grandes    4.-Agregar | parpadeando a pantalla 
// 5.-Poder usar numeros del teclado
function App() {

  const [input, setInput] = useState('');
  const operadores = ['+', '-', '*', '/', '%'];
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (!input) {
      alert('Por favor ingrese algún valor');
    } else if (input.includes('+*') || input.includes('-*') || input.includes('+/') || input.includes('-/'))  {
        alert('Formato inválido');
      } else {
          setInput(evaluate(input));
        }
  };

  const elminarUltimoRegistro = () => {
    setInput(input.substring(0, input.length - 1))
  }

  const cambiarOperador = () => {
    if (input.includes(operadores.find(e => e === input))) {
      alert('Hola');
    }
  };




  return (
    <div className="App">
      <div className='contenedor-calculadora'>
      <Pantalla input={input} manejarCambio={cambiarOperador}/>
      <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>C</BotonClear>
          <Boton manejarClic={elminarUltimoRegistro}><img src= {imagenDelete} alt='Del'/></Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>00</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
