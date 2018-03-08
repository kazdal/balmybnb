import React from 'react';

export default class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, price, location } = this.props.spot;

    return (
      <li className="spot-index-item">
        <div className="delete-this THISISAN-IMAGEPLACEHOLDER"></div>
        <h2>
          { title }
        </h2>
        <p>From ${ price } per night</p>
      </li>
    );
  }
}
