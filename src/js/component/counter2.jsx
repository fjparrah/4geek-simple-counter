import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedSeconds = String(seconds).padStart(6, "0"); 

  return (
    <div>
      <h1>{formattedSeconds}</h1>
    </div>
  );
};

export default SecondsCounter;