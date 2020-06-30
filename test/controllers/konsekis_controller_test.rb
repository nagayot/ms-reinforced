require 'test_helper'

class KonsekisControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get konsekis_new_url
    assert_response :success
  end

  test "should get create" do
    get konsekis_create_url
    assert_response :success
  end

end
