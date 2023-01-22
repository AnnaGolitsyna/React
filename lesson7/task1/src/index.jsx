import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

const numbers = [3, 4, 5, 8, 9];

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);
