import axios from "axios";
import React, { useState } from "react";
// import { useEffect } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [task, setTask] = useState("");
  // const [data, setData] = useState([]);
  // NOTE: do not delete `data-testid` key value pair

  const AddItem = () => {
    axios
      .post("http://localhost:8080/Added", {
        TASK: task,
      })
      .then((response) => {
        // setData(response.data);
        // setTask("");

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button data-testid="add-task-button" onClick={() => AddItem()}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
