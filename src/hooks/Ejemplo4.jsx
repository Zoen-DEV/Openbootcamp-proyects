/**
 * Ejemplo para entender props.children
 */
import React from 'react';

const Ejemplo4 = (props) => {
  return (
    <>
        <h1>Ejemplo de CHILDREN PROPS</h1>
        <h2>
          Nombre: { props.name }
        </h2>
        {/* props.children pintara por defecto aquello que se encuentre entre las tag de 
            apertura y cierre de este componente desde el componente de orden superior*/}
        { props.children }
    </>
  )
}

export default Ejemplo4