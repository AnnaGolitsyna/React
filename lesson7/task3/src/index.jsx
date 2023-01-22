import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './transactions.js';
import transactions from './transactions.js';
import TransactionsList from './TransactionsList';

const formatAmountTrans = transactions.map(({ amount, ...rest }) => ({
  ...rest,
  amount: new Intl.NumberFormat('en-GB').format(amount),
}));

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <TransactionsList transactions={formatAmountTrans} />,
  rootElem
);
