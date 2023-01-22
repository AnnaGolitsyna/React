import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import transactions from './transactions.js';
import TransactionsList from './TransactionsList';



const rootElem = document.querySelector('#root');

ReactDOM.render(<TransactionsList transactions={transactions} />, rootElem);
