import React from 'react';

class GoodButton extends React.Component {
  handleClick(event) {
    console.log(event.target.textContent);
    alert(event.target.textContent);
  }

  render() {
    return (
      <button class="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
