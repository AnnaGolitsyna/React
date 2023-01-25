import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);
    const { innerWidth, innerHeight } = window;
    document.title = `${innerWidth} x ${innerHeight}`;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    document.title = `${innerWidth} x ${innerHeight}`;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return (
      <div className="dimensions">
        {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}

export default Dimensions;
