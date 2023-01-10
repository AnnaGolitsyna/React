import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootElem);
