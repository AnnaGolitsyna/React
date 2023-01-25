import React from 'react';


class ConnectionStatus extends React.Component {
  state = {
    status: 'Online',
  };

  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  }

  isOnline = () => {
    this.setState({
      status: 'Online',
    });
  };

  isOffline = () => {
    this.setState({
      status: 'Offline',
    });
  };

  render() {
    const onlineStatus = this.state.status === 'Online';
    return (
      <>
        <div className={onlineStatus ? 'status' : 'status status_offline'}>
          {this.state.status}
        </div>
      </>
    );
  }
}

export default ConnectionStatus;
