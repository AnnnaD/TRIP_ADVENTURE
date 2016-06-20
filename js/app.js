$(document).ready(function() {
  // console.log("test")

  var wild_nature = $('#wild_nature');
  animateMenu(wild_nature);
  var urban_places = $('#urban_places');
  animateMenu(urban_places);
  var btn_more=$('section').find('.btn_more')

  // darkingButtons();
  // lightingButtons();
  step();

});


//MENU


function animateMenu(element) {
  var after = $('.after');
  element.on('mouseenter', function() {
     if($(window).width() > 400) {
       $(this).find('.after').slideDown('slow');
     } else {
       $(this).find('.after').show();
     }

  });

  element.on('mouseleave', function() {
    if($(window).width() > 400) {
      $(this).find('.after').slideUp('slow');
    } else {
      $(this).find('.after').hide();
    }
  });
}


function step() {

var foot = $('.foot');
 $( window ).scroll(function() {
    var heightHeader = $('.ta_head').height();
    if( $(window).scrollTop() >= heightHeader ) {
         $('.foot').each( function(i){
            if ($(window).scrollTop() >= $(this).offset().top - 300 ) {
                $(this).animate({'opacity':'1'},1000);
            }
         })
    }
});
}


// function darkingButtons() {
//
//   var btn_more=$('section').find('.btn_more')
//   var button = $('button');
//
//   btn_more.on('mouseenter', function() {
//     $(this).addClass('shadow_btn_dark')
//     });
//
//    btn_more.on('mouseleave', function() {
//   //     // console.log($(this));
//     $(this).removeClass('shadow_btn_dark')
//   });
// }
//
// function lightingButtons() {
//
//   var btn_more_urban = $('.btn_more_urban');
//   var button = $('button');
//
//   btn_more_urban.on('mouseover', function() {
//     $(this).addClass('shadow_btn')
//   });
//
//   btn_more_urban.on('mouseleave', function() {
//     $(this).removeClass('shadow_btn')
//     });
// }
