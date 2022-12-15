import './App.css';
import { ListaDeTareas } from './componentes/ListaDeTareas';
 
// Guardar tareas para mostrarlas en un boton  
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
