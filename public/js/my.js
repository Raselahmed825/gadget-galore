//session storage access
var CartData = [];
if(sessionStorage.getItem('CartData')){
  CartData = JSON.parse(sessionStorage.getItem('CartData'));

  //$("#name").val(userData.name);

}


$(document).ready(function(){
  $('.bxslider').bxSlider({
  mode: 'horizontal',
  auto: true
  });

$('.menu-togglr').on('click',function(){
  $('#mainav').slideToggle('fast');
  $(this).toggleClass('active');
  
  });
  
});
