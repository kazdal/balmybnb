import React from "react";
import SpotMap from "./spot_map";
import SpotIndex from "./spot_index";

const Search = ({
  spots,
  spotImages,
  reviews,
  fetchSpots,
  fetchSpotImages,
  fetchReviews,
  updateFilter,
  coordinates,
  receiveCoordinates
}) => (
  <section className="spot-index-main">
    <SpotIndex
      spots={spots}
      coordinates={coordinates}
      spotImages={spotImages}
      reviews={reviews}
      fetchSpots={fetchSpots}
      fetchSpotImages={fetchSpotImages}
      fetchReviews={fetchReviews}
      receiveCoordinates={receiveCoordinates}

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
