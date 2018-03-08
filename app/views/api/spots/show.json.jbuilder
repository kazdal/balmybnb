json.spot do
  json.partial! '/api/spots/spot', spot: @spot
  # json.reviewIds @spot.reviews.pluck(:id)
end

# json.reviews do
#   @spot.reviews.each do |review|
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end
# end
