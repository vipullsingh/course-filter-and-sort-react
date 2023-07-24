import React from 'react';

const SortPanel = ({ handleSortChange }) => {
  return (
    <div>
      <h2>Sort Panel</h2>
      <button onClick={() => handleSortChange('latest')}>Sort by Latest</button>
      <button onClick={() => handleSortChange('nameAsc')}>Sort by Name (A to Z)</button>
    </div>
  );
};

export default SortPanel;
