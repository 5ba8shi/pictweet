$(function(){
  $(".search-input").on("keyup", function(){
    let input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
  });
});
