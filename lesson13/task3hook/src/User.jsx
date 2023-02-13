import React, { useEffect, useState } from 'react';

const usersUrl = 'https://api.github.com/users';

const User = ({
  match: {
    params: { userId },
  },
}) => {
  const [state, setState] = useState({
    name: '',
    location: '',
    avatar_url: '',
  });

  const fetchUserData = (userId) => {
    fetch(`${usersUrl}/${userId}`)
      .then((response) => response.json())
      .then(({ name, location, avatar_url }) =>
        setState((prevState) => ({ ...prevState, name, location, avatar_url }))
      );
  };

  useEffect(() => {
    fetchUserData(userId);
    // return () => {like componentWillUnmount}
  }, [userId]); // 2 arg - update

  const { name, location, avatar_url } = state;

  // if (!name || !location || !avatar_url) {
  //   return null;
  // } => it depends

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
