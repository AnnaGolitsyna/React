import React from 'react';
import Transaction from './Transaction';

class TransactionsList extends React.Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map((trans) => (
          <Transaction key={trans.id} {...trans} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
