import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import { merge } from 'lodash';

const reviewsReducer = ( state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      
      return merge({}, state, {[action.payload.review.id]: action.payload.review});
    case RECEIVE_SPOT:
      return action.payload.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
