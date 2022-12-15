import React from 'react';
import '../estilos/Avatar.css';
const useState = React.useState;

export const Avatar = ( { size, name, src } ) => {
    const [enabled, setEnabled] = useState(true);

    const imgClassName = enabled ? '' : 'disabled';
    let pictureClassName ="";
      if (size === "small") pictureClassName = "is-small"; 
        else if (size === "large") pictureClassName = "is-large";
  


    return (
    <div className='contenedor-avatar'>

      <picture className={pictureClassName}> 
        {
         name ? 
        (
        <img alt = "Avatar"
          id='imagen-avatar' 
          className={imgClassName} 
          src={src}
          onClick={() => {
          setEnabled(!enabled)
          }} 
        />
        ) : null
        }
        <strong>{enabled ? name : 'Desactivada'}</strong> 
      </picture>

    </div>
    );
}
