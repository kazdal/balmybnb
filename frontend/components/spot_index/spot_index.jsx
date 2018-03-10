import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    
    const allSpots = this.props.spots.map((spot) => {
        return <Link key={ spot.id } to={`/spots/${spot.id}`}><SpotIndexItem key={ spot.id } spot={ spot }></SpotIndexItem></Link>;
    });

    const spotCount = this.props.spots.filter(obj => obj !== undefined).length;

    return (
      <main className="spot-index-main">
        <section className="spot-index-left-items">
          <div className="spot-index-header">
            <h1><CountUp useEasing={true} start={0} end={spotCount} duration={2.5} /> balmybnb homes in Los Angeles</h1>
            <p>Explore homes verified for quality & comfort in cities around the world</p>
          </div>
          <ul>
            { allSpots }
          </ul>
        </section>

        <section className="spot-index-right-map-section">
          <div className="spot-index-right-map">
            <div>
              NO MAP
            </div>
          </div>
        </section>

      </main>
    );
  }
}
