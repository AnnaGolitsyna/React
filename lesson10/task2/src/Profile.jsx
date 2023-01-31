import React from 'react';
import UserForm from './UserForm';

const Profile = ({userData, onChange}) => {
  // input - userData{}
  // output - userForm
    return (
      <div className="column">
        <UserForm userData={userData} onChange={onChange}/>
      </div>
    );

}

export default Profile;
