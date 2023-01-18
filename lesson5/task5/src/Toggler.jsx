import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }

  changeStatus = () => {
    this.setState({
      status: this.state.status === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.changeStatus}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
