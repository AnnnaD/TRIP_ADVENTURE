$(document).ready(function() {
  // console.log("test")

  var wild_nature = $('#wild_nature');
  animateMenu(wild_nature);
  var urban_places = $('#urban_places');
  animateMenu(urban_places);
  var btn_more=$('section').find('.btn_more')

  showingSection();
  // lightingButtons();
  step();
  // slider();

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

//scrolling effect

function step() {

var foot = $('.foot');
 $( window ).scroll(function() {
    var heightHeader = $('.ta_head').height();
    if( $(window).scrollTop() >= heightHeader ) {
         $('.foot').each( function(i){
            if ($(window).scrollTop() >= $(this).offset().top - 300) {
                $(this).animate({'opacity':'1'},1000).fadeOut('slow');
            }
         })
    }

});
}




function showingSection() {

  var btn_more=$('section').find('.btn_more')
  var btn_return = $('#btn_return');
  // var button = $('button');
  var ul=$('.photos_and_descriptions_masuria')
  var article = $('article');

  btn_more.on('click', function() {
    ul.slideUp('slow');
    article.css('display','block')
    });
    btn_return.on('click', function() {
      ul.slideDown('slow');
      // article.css('display','none')
      article.slideUp('slow')
      });

};
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


//slider
$(document).ready(function() {
  console.log("working")
  var ul = $('.view_section ul');
  var li=ul = $('.view_section ul').find('li');
  li.width();
  var li_width = li.width();
  var btn_prev=$('#btn_prev');

function sliderRight() {
  li.fadeOut('slow')
  li.next().fadeIn('slow')
  }

function sliderLeft() {
  li.fadeOut('slow')
  li.prev().fadeIn('slow')
  }

$('#btn_next').on('mouseenter', function(){
  sliderRight();
  })

btn_prev.on('mouseenter', function(){
  console.log("klik")
  sliderLeft();
  })

});
