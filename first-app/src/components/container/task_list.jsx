import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

function TaskListComponent() {
  const defaultTask = new Task(
    "Ejemplo",
    "Descripcion por defecto",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
      console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <>
      <h1>Tus Tareas:</h1>
      {/* aplicar un for/map para renderizar un UL */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </>
  );
}

export default TaskListComponent;