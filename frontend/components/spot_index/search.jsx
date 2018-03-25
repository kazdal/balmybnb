import React from "react";
import SpotMap from "./spot_map";
import SpotIndex from "./spot_index";

const Search = ({
  spots,
  spotImages,
  fetchSpots,
  fetchSpotImages,
  updateFilter,
  coordinates,
  receiveCoordinates
}) => (
  <section className="spot-index-main">
    <SpotIndex
      spots={spots}
      coordinates={coordinates}
      spotImages={spotImages}
      fetchSpots={fetchSpots}
      fetchSpotImages={fetchSpotImages}
    />
    <SpotMap
      spots={spots}
      coordinates={coordinates}
      fetchSpots={fetchSpots}
      updateFilter={updateFilter}
      receiveCoordinates={receiveCoordinates}
    />
  </section>
);

export default Search;
