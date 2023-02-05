import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faArrowUp} />
// <FontAwesomeIcon icon={faArrowDown} />

const Expand = ({ title, children, isContent, onClickBtn }) => {
  const contentIcon = isContent ? (
    <i className="fa-solid fa-arrow-up"></i>
  ) : (
    <i className="fa-solid fa-arrow-down"></i>
  );

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClickBtn}>
          {contentIcon}
        </button>
      </div>
      {isContent && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isContent: PropTypes.bool,
  onClickBtn: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: 'some text',
  isContent: false,
};

export default Expand;
