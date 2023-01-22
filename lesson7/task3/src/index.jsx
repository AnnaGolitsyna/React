import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './transactions.js';
import formatAmountTrans from './transactions.js';
import TransactionsList from './TransactionsList';



const rootElem = document.querySelector('#root');

ReactDOM.render(
  <TransactionsList transactions={formatAmountTrans} />,
  rootElem
);
