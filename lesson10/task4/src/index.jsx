import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import data from './data';
import FilterableProductTable from './FilterableProductTable';

const rootElem = document.querySelector('#root');

ReactDOM.render(<FilterableProductTable products={data}/>, rootElem);
