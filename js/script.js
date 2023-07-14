$(Document).ready(function() {
    //Header Style
$(".nav-link").on('click' , function() {
    $(this).addClass('active').parent().siblings().find(".nav-link").removeClass('active')
  })


  //Smooth Scroll Header
  var headerHeight = $("nav").innerHeight()
  $("nav .nav-link").click(function () {
      var id =$(this).attr('id');
      $("html,body").animate({
          scrollTop: $("." + id).offset().top - headerHeight
      }, 900)
  })

 //Scroll To Top App
 $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $(".scrollTop").show()
    }
    else{
     $(".scrollTop").hide()

    }
 })

 $(".scrollTop").click(function(){
     $("html,body").animate({
         scrollTop: 0
     }, 900)
 })

}); //jQuery End