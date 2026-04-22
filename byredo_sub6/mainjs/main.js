
$(function(){    
    
 //slide
  /*  $(".slideList").children("div:gt(0)").hide();
        var current = 0;
    
    setInterval(function(){
    
        var next = (current+1) % 3;
        $(".slideList").find("div").eq(current).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        current = next;
},3000);*/
    
 

$('.slideList > div:gt(0)').hide();

setInterval(function(){
    $('.slideList > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.slideList');
},4000);

  });


$(document).ready(function(){
  var rnb = $('.rnb ul').prev('a');
  var rnb_nav = $('.rnb li');

  rnb.addClass('dep');
  rnb_nav.each(function(){
      if($(this).hasClass('on')){
        $(this).children('ul').show();
      }
  });

  rnb.on('click', function(){
     /* $(this).parent().addClass('on').children('ul').stop().slideDown(400);*/
      $(this).parent().addClass('on').children('ul').slideToggle(400); 
     $(this).parent().siblings('on').children('ul').slideToggle(400);  $(this).parent().siblings('li').removeClass('on').children('ul').stop().slideUp(200);
      return false;
  });
});



$(document).ready(function(){
  var tab = $('.tab li');

  tab.on('click', function(){
    var idx = $(this).index();
    var tab_con = $(this).parents('.tab_group').children('.tab_content').eq(idx);

    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.addClass('on');
    tab_con.siblings('.tab_content').removeClass('on');
  });
      });


