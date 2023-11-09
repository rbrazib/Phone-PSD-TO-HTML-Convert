$(document).ready(function(){

    // const videoSrc = $("#player-1").attr("src");
    // $(".video-paly-btn, .video_popup").on("click", function(){
    //     if($(".video_popup").hasClass("one")){
    //         $(".video_popup").removeClass("one");
    //         $("#player-1").attr("src","");
    //     }
    //     else{
    //         $(".video_popup").addClass("one");
    //         if($("#player-1").attr("src")==''){
    //         $("#player-1").attr("src", videoSrc);
    //     }  
    //     } 
        
    // });

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    $('.feature_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true
      });


      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
        // App section slider Start
    $('.app-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        dots:true,
        prevArrow:'<i class="fa fa-chevron-left pre"</i>',
        nextArrow:'<i class="fa fa-chevron-right nex"</i>',
      });
      // App section slider End
    //   Owl
    $.scrollIt({
        topOffset: -50
      });

      new WOW().init();
     
    
});
