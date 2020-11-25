class TweetsController < ApplicationController
    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def show
        tweet = Tweet.find(params[:id])
        render(json:{tweet:tweet})
    end

    def create
        tweet = Tweet.new(params[:id])

    if tweet.save
        render json:{tweet: tweet}
    else
        render(status: 422, json: { tweet: tweet, errors: tweet.errors})
    end
    end

end

private

def item_params
  params.require(:item).permit(:name, :price)
end