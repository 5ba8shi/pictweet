class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all
  end

  def new
    @tweet = Tweet.new
  end

  def create
    binding.pry
    Tweet.create(tweet_params)
  end

  private
  def tweet_params
    params.permit(:name, :title, :text)
  end

end
