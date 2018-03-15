import { connect } from 'react-redux';
import React from 'react';
import { createReview, clearReviewErrors } from '../../actions/review_actions';
import ReviewForm from './review_form';

const msp = state => ({
  reviews: Object.values(state.entities.reviews),
  errors: state.errors.reviews
});

const mdp = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});


export default connect(msp, mdp)(ReviewForm);
