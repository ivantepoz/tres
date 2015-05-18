//JavaScript

$(document).ready(function(e){
    document.addEventListener("diviceready"),function(){
  
    $('#beep').tap(function(){
    navigator.notification.beep(1);
    });//tap bep

     $('#vibrar').tap(function(){
    navigator.notification.vibrate(1000);
    });//tap vibrar


  },false);//deviceready
});//ready


    