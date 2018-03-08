import React from 'react';

export default class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, price, location } = this.props.spot;

    return (
      <section className="spot-index-item">
        <h2>
          { title }
        </h2>
        <p>From ${ price } per night</p>
      </section>
    );
  }
}
