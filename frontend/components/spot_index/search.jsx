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
  updateFilter
}) => (
  <section className="spot-index-main">
    <SpotIndex
      spots={spots}
      spotImages={spotImages}
      reviews={reviews}
      fetchSpots={fetchSpots}
      fetchSpotImages={fetchSpotImages}
      fetchReviews={fetchReviews}
    />
    <SpotMap
      spots={spots}
      fetchSpots={fetchSpots}
      updateFilter={updateFilter}
    />
  </section>
);

export default Search;
