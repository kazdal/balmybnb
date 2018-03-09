json.extract! user, :id, :email
json.image_url asset_path(user.profile_image.url)
