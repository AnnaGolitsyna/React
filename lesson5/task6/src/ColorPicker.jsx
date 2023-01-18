import React from 'react';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      colorText: '',
    };
  }

  hoverEnter = (e, color) => {
    
    this.setState({
      colorText: color,
    });
  };

  hoverLeave = () => {
    this.setState({
      colorText: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={(e) => this.hoverEnter(e, 'coral')}
            onMouseLeave={this.hoverLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={(e) => this.hoverEnter(e, 'aqua')}
            onMouseLeave={this.hoverLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={(e) => this.hoverEnter(e, 'bisque')}
            onMouseLeave={this.hoverLeave}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
