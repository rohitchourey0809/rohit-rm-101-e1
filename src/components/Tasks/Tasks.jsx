import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import axios from "axios";
import { useEffect } from "react";

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Todo")
      .then((response) => {
        setData(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log("data", Data);
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {Data.map((e, index) => (
          <Task key={e.id} {...e} />
          // <div>{e.id}</div>
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
