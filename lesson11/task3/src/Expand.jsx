import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faArrowUp} />
// <FontAwesomeIcon icon={faArrowDown} />

const Expand = ({ title, children, isContent, onClickBtn }) => {
  const contentIcon = isContent ? (
    <i class="fa-solid fa-arrow-up"></i>
  ) : (
    <i class="fa-solid fa-arrow-down"></i>
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

export default Expand;
