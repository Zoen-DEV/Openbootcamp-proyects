import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";

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
    console.log("..");
    setLoading(false);
    return () => {
      console.log("E..");
    };
  }, [tasks]);
  return (
    <>
      <div className="col-12">
        <div
          className="card"
          style={{
            margin: "20px",
            color: "#232323",
          }}
        >
          <div className="card-header">
            {/* card header */}
            <h5 className="tasks-title">Tus Tareas:</h5>
            {/* card body */}
            <div
              className="card-body"
              style={{
                position: "relative",
                height: "400px",
              }}
              data-mdb-perfect-scrollbar="true"
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Titúlo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">CRUD</th>
                  </tr>
                </thead>
                <tbody>
                  {/* todo: iterar sobre una lista de tareas */}
                  <TaskComponent task={defaultTask}></TaskComponent>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskListComponent;
