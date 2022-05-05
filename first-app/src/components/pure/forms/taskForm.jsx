import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      true,
      levelRef.current.value
    );
    add(newTask);
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    levelRef.current.value = 'Normal';
  };

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4 addForm"
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
        <label htmlFor="selectLevel" className="sr-only">Prioridad</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option value={LEVELS.NORMAL}>
            Normal
          </option>
          <option value={LEVELS.URGENTE}>
            Urgente
          </option>
          <option value={LEVELS.BLOCKING}>
            Bloqueada
          </option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">Agregar</button>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
