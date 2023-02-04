import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    textContent: false,
  };
  handlerBtn = () => {
    this.setState({
      textContent: !this.state.textContent,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Some title"
          isContent={this.state.textContent}
          onClickBtn={this.handlerBtn}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
