$(function(){
   $(".indecators li").on("click" , function(e){
      $(".indecators li").removeClass("active") ; 
      $(this).addClass("active");
   })
});