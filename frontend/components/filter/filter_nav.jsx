import React from "react";

class FilterNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    return (
      <nav className="filter-nav">
        <ul>
          <button onClick={() => this.props.openModal("price")}>Price</button>
        </ul>
      </nav>
    );
  }
}

export default FilterNav;
