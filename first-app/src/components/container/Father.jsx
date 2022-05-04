import React, { useState } from "react";
import Child from "../pure/Child";

const Father = () => {

    const [name, setName] = useState('Zoen')

    const showMsg = (text) => {
        alert(`Mensaje recibido: ${text}`);
    }

    const updateName = (newName) => {
        setName(newName);
    }

  return (
    <>
      <h1>Father</h1>
      <Child send={showMsg} name={name} update={updateName}/>
    </>
  );
};

export default Father;
