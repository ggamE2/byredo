
 // JavaScript Document
$(function(){
 /* 베스트북 슬라이더 */
  var mySlider=$(".slide ul").bxSlider({
      mode:"horizontal",
      slideWidth:1600,
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:200,
        minSlides:2,
        maxSlides:6,
        slideMargin:40,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn1").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn1").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
    
    
    
  var mySlider2=$(".slide_m ul").bxSlider({
      mode:"horizontal",
        slideWidth:640,
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:175,
        minSlides:2,
        maxSlides:2,
        slideMargin:15,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn2").on("click",function(){
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn2").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  });
      
  
  
 });    //function end