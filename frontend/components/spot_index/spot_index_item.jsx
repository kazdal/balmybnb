import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  // const spotId = this.props.spot.id;
  // this.props.history.push(`/spots/${spotId}`);
}

  render() {
    const { title, description, price, location } = this.props.spot;

    return (
      <li className="spot-index-item" onClick={this.handleClick}>
        <div className="delete-this THISISAN-IMAGEPLACEHOLDER"></div>
        <h2>
          { title }
        </h2>
        <p>From ${ price } per night</p>
      </li>
    );
  }
}

export default withRouter(SpotIndexItem);
