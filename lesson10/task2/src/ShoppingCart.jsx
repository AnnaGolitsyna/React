import React from 'react';
import ProductsList from './ProductsList';
import CarlTitle from './CarlTitle';

class ShoppingCart extends React.Component {
  // input - userName
  // state - goods[] +++
  // output - render CartTitle, ProductsList
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 12',
        price: 2000,
      },
      {
        id: '2',
        name: 'iPad Pro 2',
        price: 1800,
      },
    ],
  };
  render() {
    return (
      <div className="column">
        <CarlTitle userName={this.props.userName} count={this.state.cartItems.length}/>
        <ProductsList cartItems={this.state.cartItems}/>
      </div>
    );
  }
}

export default ShoppingCart;
