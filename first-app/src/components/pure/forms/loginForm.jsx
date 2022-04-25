/**
 * Componente que va a tener un formulario de inicio de sesion
 */
import React, { useState } from "react";

const loginForm = () => {
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);

  return (
  <>
  
  </>
  );
};

export default loginForm;
