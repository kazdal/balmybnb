import React from 'react';

class FilterNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="filter-nav">
        <ul>
          <li onClick={ () => this.props.openModal('price') }>Price</li>
        </ul>
      </nav>
    );
  }
}

export default FilterNav;
