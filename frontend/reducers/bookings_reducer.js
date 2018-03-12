import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING} from '../actions/booking_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.booking.id]: action.booking.booking});
    case RECEIVE_CURRENT_USER:
      const bookings = action.payload ? action.payload.bookings : null;
      return merge({}, state, bookings);
    default:
      return state;
  }
};

export default bookingsReducer;
