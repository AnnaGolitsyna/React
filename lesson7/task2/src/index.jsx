import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import users from './users.js';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

ReactDOM.render(<UsersList users={users}/>, rootElem);
