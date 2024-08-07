class ApplicationController < ActionController::API
  def hello
    render json: { message: "test successful" }, status: 200
  end
end
