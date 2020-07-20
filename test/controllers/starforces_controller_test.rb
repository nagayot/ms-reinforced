require 'test_helper'

class StarforcesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get starforces_new_url
    assert_response :success
  end

end
