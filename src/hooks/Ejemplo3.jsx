/**
 * Ejemplo hooks:
 * -useState
 * -useContext
 */
import React, { useState, useContext } from 'react';

// componente 1 dispone de un contexto que va a tener un valor
// que recibe desde el padre

    // inicializamos un estado vacio que va a 
    // rellenarse con los datos del contexto padre
    const miContexto = React.createContext(null);

const Component1 = () => {

    const state = useContext(miContexto);

  return (
    <>
        <h1>
            El token es: {state.token}
        </h1>
        {/* Pintamos el componente 2 */}
        <Component2 />
    </>
  )
}

const Component2 = () => {

    const state = useContext(miContexto);

    return (
      <>
        <h2>
            La sesion es: {state.sesion}
        </h2>
      </>
    )
}

export default function MiComponenteConContexto() {

    const initialState = {
        token: '123456789',
        sesion: 1
    }

    // creamos el estado de este componente
    const [sesionData, setSesionData] = useState(initialState);

    const actualizarSesion = () => {
        setSesionData(
            {
                token: 'JWT123456789',
                sesion: sesionData.sesion + 1
            }
        );
    }

    return(
        <>
            <miContexto.Provider value={sesionData}>
                {/* todo lo que esta aqui adentro
                    puede leer los datos de sesionData
                    Ademas si se actualiza lo que esta
                    aqui todo lo demas tambien se actualiza*/}
                    <Component1></Component1>
                    <button onClick={() => actualizarSesion()}>Actualizar</button>
            </miContexto.Provider>
        </>
    );
}