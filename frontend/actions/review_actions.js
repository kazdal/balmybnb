import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});


export const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then(reviews => (
    dispatch(receiveAllReviews(reviews))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};

export const fetchReview = (id) => dispatch => {
  return APIUtil.fetchReview(id).then(payload => (
    dispatch(receiveReview(payload))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};

export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};
