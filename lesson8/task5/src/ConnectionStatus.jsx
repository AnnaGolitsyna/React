import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.handlerOnlineStatus);
    window.addEventListener('offline', this.handlerOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handlerOnlineStatus);
    window.removeEventListener('offline', this.handlerOnlineStatus);
  }

  handlerOnlineStatus = (e) => {
    this.setState({
      status: e.target.navigator.onLine ? 'online' : 'offline',
    });
  };

  render() {
    const onlineStatus = this.state.status === 'online';
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
