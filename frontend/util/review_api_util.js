export const fetchReviews = () => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews'
  })
);

export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  })
);

export const createReview = spot => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { spot }
  })
);
