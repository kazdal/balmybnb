@spot_images.each do |spot_image|
  json.set! spot_image.id do
    json.partial! 'spot_image', spot_image: spot_image
  end
end
