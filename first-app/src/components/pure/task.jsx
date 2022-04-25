import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Tarea creada');
    return () => {
      console.log(`Tarea: ${task.name} esta por eliminarse`)
    }
  }, [task]);

  return (
    <>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5>La tarea está: {task.completed ? "Completada" : "Pendiente"}</h5>
    </>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
