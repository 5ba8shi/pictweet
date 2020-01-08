$(function(){

  let search_list = $(".contents.row");

  function appendTweet(tweet) {
    let current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ?

    let current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ?

    <% if user_signed_in? && current_user.id == tweet.user_id %>
    <li>
      <%= link_to '編集', "/tweets/#{tweet.id}/edit", method: :get %>
    </li>
    <li>
      <%= link_to '削除', "/tweets/#{tweet.id}", method: :delete %>
    </li>


  }


  $(".search-input").on("keyup", function() {
    let input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyup: input },
      dataType: 'json'
    })
    .done(function(tweets) {
      search_list.empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません。");
      }
    })
  });
});