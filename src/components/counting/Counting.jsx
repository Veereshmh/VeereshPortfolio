import React, { useState, useEffect, useRef } from "react";

function Counting() {
  const [Count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const toogleCounter = () => {
    setRunning((prev) => !prev);
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
    >
      <h2>{Count}</h2>
      <button onClick={toogleCounter}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}

export default Counting;
