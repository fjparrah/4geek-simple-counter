import React, { useEffect, useState } from "react";

const Clock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <h1>{time}</h1>
      </div>
    );
  };
  
  export default Clock;