import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  };

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          className="form-control form-control-lg"
          required
          autoFocus
          ref={nameRef}
          type="text"
          placeholder="Ingrese un nombre para esta tarea"
        />
        <input
          className="form-control form-control-lg"
          required
          ref={descriptionRef}
          type="text"
          placeholder="Ingrese la descripción de la tarea"
        />
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
