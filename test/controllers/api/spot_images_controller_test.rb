require 'test_helper'

class Api::SpotImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_spot_images_show_url
    assert_response :success
  end

  test "should get create" do
    get api_spot_images_create_url
    assert_response :success
  end

end
