import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  // click => changeStatus => render

  render() {
    return (
      <div className="toggler" onClick={this.changeStatus}>
        {this.state.status ? 'On' : 'Off'}
      </div>
    );
  }
}

export default Toggler;
