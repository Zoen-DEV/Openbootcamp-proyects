/**
 *  Definiendo estilos a travez de constantes
 */
import React, { useState } from "react";

const loggedStyle = {
  //estilos para cuando el usuario esta loggeado
  color: "blue",
};

const unloggedStyle = {
  //estilos para cuando el usuario no esta loggeado
  color: "tomato",
  fontWeight: "bold",
};

const btnStyle = {
  // estilos del boton de log in / log out
  background: "salmon",
  border: "2px groove lightsalmon",
  fontWeight: "bold",
  borderRadius: "5px",
  padding: "5px 10px",
  boxShadow: "1px 1px 10px 0px black",
};

const GreetingStyles = (props) => {
  // generamos un estado para el componente  y asi controlar
  // si el usuario esta o no loggeado
  const [logged, setLogged] = useState(false);

  const greetingUser = <h1 className="title">Hola, {props.name}</h1>;
  const loginText = <h1 className="title">Iniciar sesion</h1>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser : loginText}

      <button
        style={btnStyle}
        onClick={() => {
          setLogged(logged ? false : true);
        }}
        className="logged"
      >
        {logged ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export default GreetingStyles;
