import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }

  changeStatus = (e) => {
    this.setState({
      status: e.target.textContent === 'Off' ? 'On' : 'Off',
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
