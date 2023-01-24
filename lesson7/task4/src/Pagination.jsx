// input => f goPrev, f goNext
// output => 2 btn, this page
// create let => isPrevPageAvailable, isNextPageAvailable


import React from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  goPrev,
  goNext,
}) => {
  // let isPrevPageAvailable = 1;
  let isNextPageAvailable = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={currentPage === 1}>
        {currentPage !== 1 && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={currentPage === isNextPageAvailable}
      >
        {currentPage !== isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
