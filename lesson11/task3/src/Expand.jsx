import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faArrowUp} />
// <FontAwesomeIcon icon={faArrowDown} />

class Expand extends React.PureComponent {
  state = {
    textContent: false,
  };
  handlerBtn = () => {
    this.setState({
      textContent: !this.state.textContent,
    });
  };
  render() {
    const contentIcon = this.state.textContent ? (
      <i className="fa-solid fa-arrow-up"></i>
    ) : (
      <i className="fa-solid fa-arrow-down"></i>
    );

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handlerBtn}>
            {contentIcon}
          </button>
        </div>
        {this.state.textContent && (
          <div className="expand__content">{this.props.children}</div>
        )}
      </div>
    );
  }
};

Expand.propTypes = {
  title: PropTypes.string,

};

Expand.defaultProps = {
  title: 'some text',

};

export default Expand;
