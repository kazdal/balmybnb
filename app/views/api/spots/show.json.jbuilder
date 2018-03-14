json.spot do
  json.partial! '/api/spots/spot', spot: @spot
  # json.reviewIds @spot.reviews.pluck(:id)
  json.spotImageIds @spot.spot_images.pluck(:id)
end



json.spot_images do
  @spot.spot_images.each do |spot_image|
    json.set! spot_image.id do
      json.partial! 'api/spot_image/spot_image', spot_image: spot_image
    end
  end
end

json.bookings do
  @spot.bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'api/bookings/booking', booking: booking
    end
  end
end

# json.reviews do
#   @spot.reviews.each do |review|
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end
# end
