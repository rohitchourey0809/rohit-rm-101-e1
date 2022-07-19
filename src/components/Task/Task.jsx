import React from "react";
import axios from "axios";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (props) => {
  // console.log(props);
  // console.log( {TASK} );
  // NOTE: do not delete `data-testid` key value pair
  const DeleteItem = (deleteid) => {
    console.log(deleteid, "deleteid");
    axios
      .delete(`http://localhost:8080/Todo/${deleteid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <li data-testid="task" className={styles.task}>
        <input type="checkbox" data-testid="task-checkbox" />
        <div data-testid="task-text">{props.text}</div>
        {/* Counter here */}
        <Counter />
        <button
          data-testid="task-remove-button"
          onClick={() => DeleteItem(props.id)}
        >
          Remove
        </button>
      </li>
    </>
  );
};

export default Task;
