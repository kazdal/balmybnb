import { connect } from 'react-redux';
import React from 'react';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const msp = state => ({
  reviews: Object.values(state.entities.reviews)
});

const mdp = dispatch => ({
  createReview: (review) => dispatch(createReview(review))
});


export default connect(msp, mdp)(ReviewForm);
