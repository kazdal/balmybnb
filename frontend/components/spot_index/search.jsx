import React from 'react';
import SpotMap from './spot_map';
import SpotIndex from './spot_index';

const Search = ({ spots, spotImages, fetchSpots, fetchSpotImages }) => (
  <section>
    <SpotIndex
      spots = { spots }
      spotImages = { spotImages }
      fetchSpots = { fetchSpots }
      fetchSpotImages = { fetchSpotImages }
      />
    <SpotMap />
  </section>
);

export default Search;
