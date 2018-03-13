import React from 'react';

const handeChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const Filter = ({ minPrice, maxPRice, updateFilter }) => (
  <nav className="spot-map-filter-nav">
    
  </nav>
);

export default Filter;
