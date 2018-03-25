import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";

export const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const clearBookingErrors = () => {
  return {
    type: CLEAR_BOOKING_ERRORS
  };
};

export const fetchBookings = () => dispatch => {
  return APIUtil.fetchBookings().then(
    bookings => dispatch(receiveAllBookings(bookings)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const fetchBooking = id => dispatch => {
  return APIUtil.fetchBooking(id).then(
    payload => dispatch(receiveBooking(payload)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
