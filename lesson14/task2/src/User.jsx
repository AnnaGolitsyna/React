import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [state, setUserData] = useState({
    name: '',
    location: '',
    avatar_url: '',
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('404');
      })
      .then(({ name, location, avatar_url }) =>
        setUserData((prevState) => ({
          ...prevState,
          name,
          location,
          avatar_url,
        }))
      );
  }, [userId]);

  const { name, location, avatar_url } = state;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
