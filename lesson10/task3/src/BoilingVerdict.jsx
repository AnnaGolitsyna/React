import React from 'react';

class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const text =
      this.props.celsius >= 100
        ? 'The water would boil.'
        : 'The water would not boil.';
    return(
      <p>{text}</p>
    )
  }
}

export default BoilingVerdict;
