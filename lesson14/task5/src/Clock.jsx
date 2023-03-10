import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
    
  const [time, setTime] = useState(
    moment(getTimeWithOffset(offset)).format('LTS')
  );

  useEffect(() => {
    const inerval = setInterval(() => {
      setTime(moment(getTimeWithOffset(offset)).format('LTS'));
    }, 1000);
    return () => {
      clearInterval(inerval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
