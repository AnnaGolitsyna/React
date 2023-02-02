import React from 'react';

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterChange,
  onStockChange,
}) => {
  const handleFilterTextChange = (event) => {
    onFilterChange(event.target.value);
  };

  const handleInStockChange = (event) => {
    onStockChange(event.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};
export default SearchBar;
