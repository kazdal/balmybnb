import { combineReducers } from "redux";
import spots from "./spots_reducer";
import spotImages from "./spot_images_reducer";
import bookings from "./bookings_reducer";
import reviews from "./reviews_reducer";

export default combineReducers({
  spots,
  spotImages,
  bookings,
  reviews
});
