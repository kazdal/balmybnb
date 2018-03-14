import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const reviewsReducer = ( state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.payload.review.id]: action.payload.review});
    default:
      return state;
  }
};

export default reviewsReducer;
