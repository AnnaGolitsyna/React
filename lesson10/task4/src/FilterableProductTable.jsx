import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText,
    });
  };
  handleInStockOnly = (inStockOnly) => {
    this.setState({
      inStockOnly,
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterChange={this.handleFilterTextChange}
          onStockChange={this.handleInStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
export default FilterableProductTable;
