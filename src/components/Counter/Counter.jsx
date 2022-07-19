import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair

  const Increment = () => {
    setcounter(count + 1);
  };
  const Decrement = () => {
    if (count > 0) {
      setcounter(count - 1);
    }
  };
  const [count, setcounter] = useState(0);
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={(e) => Increment(e)}
      >
        Increment
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={(e) => Decrement(e)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
