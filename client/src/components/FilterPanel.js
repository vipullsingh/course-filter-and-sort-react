import React from 'react';

const FilterPanel = ({
  handleFilterChange,
  handleSearchChange,
  handleTopicChange,
  setSelectedMinPrice,
  setSelectedMaxPrice,
  topics,
  priceRanges,
}) => {
  return (
    <div>
      <h2>Filter Panel</h2>
      <div>
        <input type="text" placeholder="Search by Name" onChange={(e) => handleSearchChange(e.target.value)} />
      </div>
      <div>
        <button onClick={() => handleFilterChange('topic')}>Filter by Topic</button>
        <select onChange={(e) => handleTopicChange(e.target.value)}>
          <option value="">Select a Topic</option>
          {topics.map((topic) => (
            <option key={topic._id} value={topic._id}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => handleFilterChange('price')}>Filter by Price</button>
        <select onChange={(e) => setSelectedMinPrice(Number(e.target.value))}>
          <option value="">Min Price</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range.min}>
              {range.min}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSelectedMaxPrice(Number(e.target.value))}>
          <option value="">Max Price</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range.max}>
              {range.max}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
