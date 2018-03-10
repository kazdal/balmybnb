@spots.each do |spot|
  json.set! spot.id do
    json.partial! 'spot', spot: spot
    json.spotImageIds spot.spot_images.pluck(:id)
    json.reviewIds []
  end
end
