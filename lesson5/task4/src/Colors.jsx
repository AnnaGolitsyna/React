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
      <div className="colors">
        <div
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
          className="colors__button"
        ></div>
        <span className="colors__value"></span>
        <div
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
        ></div>
        <span className="colors__value"></span>
        <div
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
        ></div>
        <span className="colors__value"></span>
      </div>
    );
  }
}

export default Colors;
