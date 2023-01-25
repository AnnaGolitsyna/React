import React from 'react';

class Life extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
    console.log('constructor: good place to create state');
  }
  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
    this.setState({
      num: Math.random(),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);

      console.log(
        'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
      );

  }

  componentDidUpdate(nextProps, prevState) {
    console.log(nextProps, prevState);
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
    // this.setState({
    //   num: Math.random() + 1,
    // });
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }

  render() {
    console.log('return React element to build DOM');
    return (
      <>
        <div>{this.state.num}</div>
      </>
    );
  }
}
export default Life;
