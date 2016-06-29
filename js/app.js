$(document).ready(function() {
  // console.log("test")

  var wild_nature = $('#wild_nature');
  animateMenu(wild_nature);
  var urban_places = $('#urban_places');
  animateMenu(urban_places);
  var btn_more=$('section').find('.btn_more')

  showingSectionMasuria();
  showingSectionWarsaw()
  // showingSectionMountains();
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


function showingSectionMasuria() {

  var btn_more=$('.masuria')
  var btn_return = $('.btn_return');
  // var button = $('button');
  var ul=$('.photos_and_descriptions_masuria')
  var article = $('article');

  btn_more.on('click', function() {
    $(this).siblings().parent().parent().parent().first().slideUp('slow');//hiding section
    $(this).siblings().parent().parent().parent().first().siblings().eq(11).css('display','block');//article
    });
  btn_return.on('mouseenter', function() {
    $(this).siblings().siblings().parent().siblings().eq(11).slideDown('slow');//section
      // article.css('display','none')
    $(this).siblings().parent().slideUp('slow')//article
    });
};

function showingSectionWarsaw() {

  var btn_warsaw=$('.warsaw')
  var btn_return_warsaw = $('#return_warsaw');
  // var button = $('button');
  var ul=$('.photos_and_descriptions_warsaw')
  var article = $('article');

  btn_warsaw.on('click', function() {
    btn_warsaw.siblings().parent().parent().parent().first().siblings().siblings().eq(13).slideUp('slow');//hiding section
    btn_warsaw.siblings().parent().parent().parent().first().siblings().eq(13).css('display','block');//article
    });
  btn_return_warsaw.on('click', function() {
    btn_return_warsaw.siblings().siblings().parent().siblings().eq(13).slideDown('slow');//section
      // article.css('display','none')
    btn_return_warsaw.siblings().parent().slideUp('slow')//article
    });
};

// function showingSectionMountains() {
//
//   var btn_more=$('section').find('.btn_more')
//   var btn_return = $('#btn_return');
//   // var button = $('button');
//   var ul=$('.photos_and_descriptions_masuria')
//   var article = $('article');
//
//   btn_more.on('click', function() {
//     $(this).siblings().parent().parent().parent().eq(1).slideUp('slow');//hiding section
//     $(this).siblings().parent().parent().parent().first().siblings().eq(13).css('display','block');//article
//     });
//   btn_return.on('click', function() {
//     $(this).siblings().siblings().parent().siblings().eq(13).slideDown('slow');//section
//       // article.css('display','none')
//     $(this).siblings().parent().slideUp('slow')//article
//     });
// };

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


//slider Masuria
$(document).ready(function() {
  console.log("working")
  var ul = $('.view_section ul');
  var li=ul = $('.view_section ul').find('li');
  li.width();
  var li_width = li.width();
  var btn_prev=$('.btn_prev');

function sliderRight() {
  li.fadeOut('slow')
  li.next().fadeIn('slow')
  }

function sliderLeft() {
  li.fadeOut('slow')
  li.prev().fadeIn('slow')
  }

$('.btn_next').on('mouseenter', function(){
  sliderRight();
  })

btn_prev.on('mouseenter', function(){
  console.log("klik")
  sliderLeft();
  })
});

//slider Warsaw

$(document).ready(function() {
  console.log("working")
  var ul = $('.view_section_warsaw ul');
  var li=ul = $('.view_section_warsaw ul').find('li');
  li.width();
  var li_width = li.width();
  var btn_prev=$('.btn_prev');

function sliderRight() {
  li.fadeOut('slow')
  li.next().fadeIn('slow')
  }

function sliderLeft() {
  li.fadeOut('slow')
  li.prev().fadeIn('slow')
  }

$('.btn_next').on('mouseenter', function(){
  sliderRight();
  })

btn_prev.on('mouseenter', function(){
  console.log("klik")
  sliderLeft();
  })
});
