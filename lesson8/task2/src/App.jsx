import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        {this.state.visible && (
          <div>
            <Clock location={'New York'} offset={-5} />
            <Clock location={'Kyiv'} offset={2} />
            <Clock location={'London'} offset={0} />
          </div>
        )}

        <button onClick={this.toggle}>Toggle</button>
      </>
    );
  }
}

export default App;
