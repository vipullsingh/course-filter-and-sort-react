import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
