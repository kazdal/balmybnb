import React from "react";
import { Range } from "rc-slider";

export default class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
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

  averagePrice() {
    const spotCount = this.props.spots.length;
    let totalPrice = 0;
    this.props.spots.forEach(spot => (totalPrice += spot.price));
    return Math.round(totalPrice / spotCount);
  }

  render() {
    return (
      <div className="white-modal" onClick={this.props.closeModal}>
        <div
          className="filter-container filter-price"
          onClick={e => e.stopPropagation()}
        >
          <p>
            ${this.state.minPrice} - ${this.state.maxPrice}
          </p>

          <h6>The average nightly price is ${this.averagePrice()}</h6>
          <Range
            min={10}
            max={1250}
            allowCross={false}
            value={[this.state.minPrice, this.state.maxPrice]}
            defaultValue={[this.state.minPrice, this.state.maxPrice]}
            onChange={this.updatePrice}
          />

          <a
            onClick={() =>
              this.handleChange(
                ["minPrice", "maxPrice"],
                [this.state.minPrice, this.state.maxPrice]
              )
            }
          >
            Apply
          </a>
        </div>
      </div>
    );
  }
}
