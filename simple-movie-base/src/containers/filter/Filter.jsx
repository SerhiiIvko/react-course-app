import React from 'react';
import './Filters.css';

function Filter() {
  return (
    <div>
      <button
        className="button"
        type="button"
      >
        Sort by likes
      </button>
        &nbsp;&nbsp;&nbsp;
      <button
        className="button"
        type="button"
      >
        Sort by rating
      </button>
    </div>
  );
}
export default Filter;
