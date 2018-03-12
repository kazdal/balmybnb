json.extract! user, :id, :email, :booking_ids
json.image_url asset_path(user.profile_image.url)
