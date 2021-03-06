import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, deleteTask }) => {
  useEffect(() => {
    console.log(".");
    return () => {
      console.log(`${task.name}`);
    };
  }, [task]);

  const taskIconCompleted = () => {
    console.log(task.completed);
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          id="toggle-btn"
          className="bi-toggle-off"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          id="toggle-btn"
          className="bi-toggle-on"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    }
  };

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  };

  return (
    <>
      <tr className="fw-normal">
        <th>
          <span className="ms-2">{task.name}</span>
        </th>
        <td className="align-middle">
          <span>{task.description}</span>
        </td>
        <td className="align-middle">{taskLevelBadge()}</td>
        <td className="align-middle">{taskIconCompleted()}</td>
        <td className="align-middle">
          <i onClick={() => deleteTask(task)} className="bi-trash" style={{ color: "#a52323", cursor: 'pointer' }}></i>
        </td>
      </tr>
    </>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskComponent;
