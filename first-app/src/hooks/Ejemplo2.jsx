// ejemplo de useState - useEffect - useRef
import React, { useState, useRef, useEffect } from 'react';

function Ejemplo2() {

    // crearemos 2 contadores distintos en estados diferentes
    const [con1, setCon1] = useState(0);
    const [con2, setCon2] = useState(0);
    
    // crearemos una referencia para asociar una variable con un elemento de el DOM
    const miRef = useRef();

    const incrementCon1 = () => {
        setCon1(con1 + 1);
    }

    const incrementCon2 = () => {
        setCon2(con2 + 1)
    }

    // Aqui usaremos el useEffect

    // ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
    // cada vez que haya un cambio en el estado del componente
    // se ejecuta aquello que este dentro del useEffect

    // useEffect(() => {
    //   console.log('Cambio en el estado del componente');
    //   console.log('Mostrando referencia a elemento del DOM');
    //   console.log(miRef);
    // })
    // --------------------------------------------------------------


    // ? Caso 2: Solo cuando cambie el contador 1
    // cada vez que haya un cambio en el contador 1, se ejecuta lo que diga
    // el useEffect. En caso de que sea el contador 2 el que cambia no pasa nada

    // useEffect(() => {
    //     console.log('Cambio en el estado del contador 1');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [con1]);
    // --------------------------------------------------------------
    
    // ? Caso 3: Solo cuando cambie el contador 1 o contador 2
    // cada vez que haya un cambio en el contador 1, se ejecuta lo que diga
    // el useEffect.  cada vez que haya un cambio en el contador 1, 
    // se ejecuta lo que diga el useEffect.


    useEffect(() => {
        console.log('Cambio en el estado del contador 1');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [con1, con2]);

    

  return (
    <>
        <h1>Ejemplo useState - useRef - useEffect</h1>
        <h2>{`Contador 1: ${con1}`}</h2>
        <h2>{`Contador 2: ${con2}`}</h2>
        {/* Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        <div>
            <button onClick={() => incrementCon1()}>Incrementar primer contador</button>
            <button onClick={() => incrementCon2()}>Incrementar primer contador</button>
        </div>
    </>
  )
}

export default Ejemplo2;
