export const fetchSpots = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data
  });
};

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
