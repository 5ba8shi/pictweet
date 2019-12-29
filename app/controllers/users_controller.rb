class UsersController < ApplicationController
  def show
    binding.pry
    @nickname = current_user.nickname
    @tweets = current_user.tweets
  end
  greet
end
