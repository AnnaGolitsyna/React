import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  handlerChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  sendValue = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    console.log(this.state.value);
    return (
      <form className="search" onSubmit={this.sendValue}>
        <input
          type="text"
          className="search__input"
          onChange={this.handlerChange}
          value={this.state.value}
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
