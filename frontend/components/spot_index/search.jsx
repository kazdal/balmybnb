import React from 'react';
import SpotMap from './spot_map';
import SpotIndex from './spot_index';

const Search = ({ spots, spotImages, fetchSpots, fetchSpotImages }) => (
  <section className="spot-index-main">
    <SpotIndex
      spots = { spots }
      spotImages = { spotImages }
      fetchSpots = { fetchSpots }
      fetchSpotImages = { fetchSpotImages }
      />
    <SpotMap
      spots = { spots }
      fetchSpots = { fetchSpots }
      />
  </section>
);

export default Search;
