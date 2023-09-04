import React, { useState, useEffect } from 'react';

const ExamCounter = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <h5>Timer : {formatTime(timeLeft)}</h5>
    </>
  );
};

export default ExamCounter;
