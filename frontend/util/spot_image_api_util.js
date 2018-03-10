export const fetchSpotImages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/spot_images'
  })
);

export const fetchSpotImage = id => (
  $.ajax({
    method: 'GET',
    url: `api/spot_images/${id}`
  })
);

export const createSpotImage = spot_image => (
  $.ajax({
    method: 'POST',
    url: 'api/spot_images',
    data: { spot_image }
  })
);
