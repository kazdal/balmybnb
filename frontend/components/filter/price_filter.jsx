import React from 'react';

export default class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="white-modal" onClick={this.props.closeModal}>
        <div className="filter-container" onClick={e => e.stopPropagation()}>
          THIS A PRICE FILTER
        </div>
      </div>
    );
  }
}
