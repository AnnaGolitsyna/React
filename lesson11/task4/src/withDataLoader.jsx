import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export const withDataLoader = (selectUrl) => (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }
    componentDidMount() {
      fetch(selectUrl)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            data,
          })
        );
    }
    render() {
      return (
        <>
          {this.state.data ? (
            <WrappedComponent data={this.state.data} />
          ) : (
            <Spinner />
          )}
        </>
      );
    }
  };
};

withDataLoader.propTypes = {
  selectUrl: PropTypes.string.isRequired,
  WrappedComponent: PropTypes.element.isRequired,
};
