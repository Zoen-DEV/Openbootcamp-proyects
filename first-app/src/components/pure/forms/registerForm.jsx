/**
 * Componente que va a tener un formulario de sign up
 */
 import React, { useState } from "react";

 const loginForm = () => {
   const initialData = [
     {
       user: "",
       name: '',
       email: '',
       password: "",
     },
   ];
 
   const [credentials, setCredentials] = useState(initialData);
 
   return (
   <>
   
   </>
   );
 };
 
 export default loginForm;
 