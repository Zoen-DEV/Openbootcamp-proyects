import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Tarea creada');
    return () => {
      console.log(`Tarea: ${task.name} esta por eliminarse`)
    }
  }, [task]);

  return (
    <>
      <h2 className="task-name">Nombre: {task.name}</h2>
      <h3 className="task-description">Descripcion: {task.description}</h3>
      <h4 className="task-level">Nivel: {task.level}</h4>
      <h5 className="task-completed">La tarea está: {task.completed ? "Completada" : "Pendiente"}</h5>
    </>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
