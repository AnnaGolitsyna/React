import React from 'react';

const Avatar = ({ name, avatarUrl }) => {
 
  return <img className="avatar" src={avatarUrl} alt={name} />;
};

export default Avatar;
