import React from 'react';
import { Range } from 'rc-slider';

export default class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 10,
      maxPrice: 1000
    };
    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice(e) {
    this.setState({
      minPrice: e[0],
      maxPrice: e[1]
    });
  }

  handleChange(filter, updateFilter) {
    this.props.updateFilter(filter[0], updateFilter[0]);
    this.props.updateFilter(filter[1], updateFilter[1]);
    this.props.closeModal();
  }

  render() {

    return (
      <div className="white-modal" onClick={this.props.closeModal}>
        <div className="filter-container" onClick={e => e.stopPropagation()}>
          <p>
            ${this.state.minPrice} - ${this.state.maxPrice}
          </p>
          <Range
            min={10}
            max={1000}
            allowCross={false}
            defaultValue={[0, 1000]}
            onChange={this.updatePrice}/>

          <a onClick={() => this.handleChange(['minPrice', 'maxPrice'], [this.state.minPrice, this.state.maxPrice] )}>Apply</a>
        </div>
      </div>
    );
  }
}
