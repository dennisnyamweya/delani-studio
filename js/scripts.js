/*********************Contact****************/
function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value.indexOf("@");
  var message = document.getElementById("message").value;

  if(name.length<10){
    alert("Enter your full name");
  }
  if (email == -1) {
   alert("Not a valid e-mail!");
 }
 if(message===""){
   alert("Enter message");
 }
if( name.length>10  && email>-1 && message!=="" ){
   alert( name +"we have received your message. Thank you for reaching out to us.");
 }
}
/*----------design toggle---------------*/
  $(document).ready(function(){
        $('.desi').show();
        $('.des-hidden').click(function(){
          $('.desi').hide();
            $('.des-showing').toggle();
});
      $('.des-showing').click(function(){
        $('.des-showing').hide();
         $('.desi').toggle();
});
});
/*----------development toggle---------------*/
$(document).ready(function(){
      $('.dev').show();
      $('.dev-hidden').click(function(){
        $('.dev').hide();
          $('.dev-showing').toggle();
});
    $('.dev-showing').click(function(){
      $('.dev-showing').hide();
       $('.dev').toggle();
});
});
/*----------product development toggle---------------*/
$(document).ready(function(){
      $('.prod').show();
      $('.prod-hidden').click(function(){
        $('.prod').hide();
          $('.prod-showing').toggle();
});
    $('.prod-showing').click(function(){
      $('.prod-showing').hide();
       $('.prod').toggle();
});
});
/******************Portfolio******************/
$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
});
/**************wk2*********************/
