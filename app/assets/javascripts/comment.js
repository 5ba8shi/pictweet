$(function(){
  $('new_comment') .normalize('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this); 
  })
})