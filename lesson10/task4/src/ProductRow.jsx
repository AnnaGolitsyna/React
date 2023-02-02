import React from 'react';

const ProductRow = ({name, price, stocked}) => {

  const itemStock = stocked ? name : <span style={{color: 'red'}}>{name}</span>
  return (
    <tr>
      <td>{itemStock}</td>
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
