import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import '../../styles/task.scss';

function TaskListComponent() {
  const defaultTask = new Task(
    "Ejemplo",
    "Descripcion por defecto",
    false,
    LEVELS.NORMAL
  );
    // Estado del componente
  const [tasks, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log('El estado de la tarea ha sido modificado');
    setLoading(false);
    return () => {
      console.log('El componente TaskList se esta elminando');
    }
  }, [tasks])
  

  const changeCompleted = (id) => {
      console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <>
      <h1 className="tasks-title">Tus Tareas:</h1>
      {/* aplicar un for/map para renderizar un UL */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </>
  );
}

export default TaskListComponent;
