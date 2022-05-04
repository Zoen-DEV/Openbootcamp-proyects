import React, { useRef, useState } from "react";

const Child = ({ name, send, update }) => {
    const [data, setData] = useState();
    const msgRef = useRef();
    const nameRef = useRef();

  const pressButton = () => {
    const text = msgRef.current.value;
    setData(text);
  };

  const pressButtonParams = (text) => {
    alert(`Text: ${text}`);
  };

  const submitForm = (e) => {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => console.log("boton 1")}>Botón 1</button>
      <button onClick={() => pressButton()}>Botón 2</button>
      <button onClick={() => pressButtonParams(`Hola ${name}, ¿Como estas?`)}>
        Botón 2
      </button>
      <input
        type="text"
        placeholder="Inserta un texto"
        onFocus={() => console.log("input focus")}
        onChange={(e) => console.log(`Input cambió: ${e.target.value}`)}
        onCopy={() => console.log('texto copiado del input')}
        onPaste={() => console.log('El texto ha sido pegado')}
        ref={msgRef}
      />
      {data}
      <button onClick={() => send(msgRef.current.value)}>
          Enviar mensaje
      </button>
      <div style={{marginTop: '20px'}}>
        <form onSubmit={submitForm}>
            <input ref={nameRef} type="text" placeholder="Nuevo nombre" />
            <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Child;
