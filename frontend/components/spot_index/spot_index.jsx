import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const allSpots = this.props.spots.map((spot) => {
        return <SpotIndexItem key={ spot.id } spot={ spot }></SpotIndexItem>;
    });
    return (
      <main className="spot-index-main">
        <section className="spot-index-left-items">
          <div className="spot-index-header">
            <h1>275 balmybnb homes in Los Angeles</h1>
            <p>Explore homes verified for quality & comfort in cities around the world</p>
          </div>
          <ul>
            { allSpots }
          </ul>
        </section>

        <section className="spot-index-right-map">
          THIS A MAP
        </section>

      </main>
    );
  }
}
