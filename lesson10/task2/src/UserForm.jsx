import React from 'react';

const UserForm = ({ userData, onChange }) => {
  // input - userData{}
  // output - firstName, LastName

  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={onChange}
      />
    </form>
  );
};

export default UserForm;
