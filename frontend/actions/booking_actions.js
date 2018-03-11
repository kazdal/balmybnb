import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings().then(bookings => (
    dispatch(receiveAllBookings(bookings))
  ))
);

export const fetchBooking = (id) => dispatch => (
  APIUtil.fetchBooking(id).then(payload => (
    dispatch(receiveAllBookings(payload))
  ))
);

export const createBooking = (booking) => dispatch => (
  APIUtil.fetchBooking(booking).then(booking => (
    dispatch(receiveAllBookings(booking))
  ))
);
