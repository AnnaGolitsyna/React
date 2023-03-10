import React from 'react';

const CartTitle = ({ userName, count }) => {
  // input - count, userName
  // output - text 'userName, you added count items'

  return (
    <div className="cart-title">{`${userName.firstName}, you added ${count} items`}</div>
  );
};

export default CartTitle;
