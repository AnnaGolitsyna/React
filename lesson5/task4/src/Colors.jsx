import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="counter">
        <div
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
          className="counter__button"
        ></div>
        <span className="counter__value"></span>
        <div
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="counter__button"
        ></div>
        <span className="counter__value"></span>
        <div
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
          className="counter__button"
        ></div>
        <span className="counter__value"></span>
      </div>
    );
  }
}

export default Colors;
