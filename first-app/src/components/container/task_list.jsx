import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

function TaskListComponent() {
  const defaultTask1 = new Task(
    "Ejemplo1",
    "Descripcion por defecto1",
    false,
    LEVELS.NORMAL
  );
  // Estado del componente
  const [tasks, setTask] = useState([defaultTask1]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    setLoading(false);
    return () => {
    };
  }, [tasks]);

  function completeTask(task){
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTask(tempTasks);
  }

  const deleteTask = (task) => {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTask(tempTasks);
  }

  const addTask = (task) => {
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTask(tempTasks);
  }

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
              data-mdb-perfect-scrollbar="true"
            >
              <table className="table">
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
                  {tasks.map((item, index) => {
                    return (
                      <TaskComponent deleteTask={deleteTask} complete={completeTask} key={index} task={item}></TaskComponent>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <TaskForm add={addTask}></TaskForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskListComponent;
