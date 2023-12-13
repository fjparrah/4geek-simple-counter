import React, { useState, useEffect } from 'react';

const SecondsCounters = () => {
  const [digits, setDigits] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDigits(prevDigits => {
        const newDigits = [...prevDigits];
              for (let i = 5; i >= 0; i--) {
                            if (newDigits[i] === 9) {
                              newDigits[i] = 0;
                            } else {
                              newDigits[i]++;
                              break;
                            }
              }
        return newDigits;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{digits.join('')}</h1>
    </div>
  );
};

export default SecondsCounters;