export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    filters: bounds
  })
);

export const fetchSpot = id => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`
  })
);

export const createSpot = spot => (
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot }
  })
);
