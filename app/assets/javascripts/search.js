$(function(){

  let search_list = $(".contents.row");

  function appendTweet(tweet) {
    function appendTweet(tweet) {
      let current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ?
                                  `<li>
                                    <a href="/tweets/${tweet.id}/edit" data-method="get" >編集</a>
                                  </li>
                                  <li>
                                    <a href="/tweets/${tweet.id}" data-method="delete" >削除</a>
                                  </li>` : "";

      let html =`<div class="content_post" style="background-image: url(${tweet.image});">
      <div class="more">
        <span><img src="/assets/arrow_top.png"></span>
        <ul class="more_list">
            <li>
              <a data-method="get" href="/tweets/7">詳細</a>
            </li>
            <li>
              <a data-method="get" href="/tweets/7/edit">編集</a>
            </li>
            <li>
              <a rel="nofollow" data-method="delete" href="/tweets/7">削除</a>
            </li>
            ${current_user}
        </ul>
      </div>
      <p>${tweet.text}</p>
      <span class="name">
        <a href="/users/${tweet.user_id}">
          <span>投稿者</span>${tweet.nickname}
        </a>
      </span>
    </div>`
    
    
    }
  }
  $(".search-input").on("keyup", function(){
    let input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets){
      $(".contents.row").empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
  });
});
