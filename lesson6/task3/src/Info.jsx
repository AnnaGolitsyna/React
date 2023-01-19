import React from 'react';

const Info = ({ info }) => {
  return !info ? null : <div className="info">{info}</div>;
};

export default Info;
