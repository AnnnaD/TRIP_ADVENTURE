$(document).ready(function() {

  var wild_nature = $('#wild_nature');
  animateMenu(wild_nature);
  var urban_places = $('#urban_places');
  animateMenu(urban_places);
  var btn_more=$('section').find('.btn_more');

  var wild_urban_li = $('.after').find('a');
  smooth(wild_urban_li);
  var contact=$('.main_nav').children().last().find('a');
  smooth(contact);

  showingSectionMasuria();
  showingSectionMountains()
  showingSectionWarsaw()
  showingSectionCracow()

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


//SMOOTH SCROLL

function smooth(element) {
  element.on('click', function() {
    $('body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
    },1800);
event.preventDefault();
  });
}

//SCROLLING EFFECT

function step() {

var foot = $('.foot');
 $( window ).scroll(function() {
    var heightHeader = $('.ta_head').height();
    if( $(window).scrollTop() >= heightHeader ) {
         $('.foot').each( function(i){
            if ($(window).scrollTop() >= $(this).offset().top - 300) {
                $(this).animate({'opacity':'1'},1000).fadeOut(1500);
            }
         })
    }

});
}

//SHOW HIDE SECTION

//Masuria

function showingSectionMasuria() {

  var btn_masuria=$('.masuria')
  var btn_return_masuria = $('#return_masuria');
  var ul=$('.photos_and_descriptions_masuria')
  var article = $('article');

    btn_masuria.on('click', function() {
      if ( $(window).width() > 569) {
        $(this).siblings().parent().parent().parent().first().slideUp('slow');
        $(this).siblings().parent().parent().parent().first().siblings().eq(11).css('display','block');
      } else {
        $(this).siblings().parent().parent().parent().first().siblings().eq(11).css('display','none');
      }
    });
    btn_return_masuria.on('mouseenter', function() {
      $(this).siblings().siblings().parent().siblings().eq(11).slideDown('slow');
      $(this).siblings().parent().slideUp('slow')
    });
  };

//Mountains

  function showingSectionMountains() {

    var btn_mountains=$('.mountains')
    var btn_return_mountains = $('#return_mountains');
    var ul=$('.photos_and_descriptions_mountains')
    var article = $('article');

      btn_mountains.on('click', function() {
        if ( $(window).width() > 569) {
          $(this).siblings().parent().parent().parent().first().slideUp('slow');
          $(this).siblings().parent().parent().parent().first().siblings().eq(13).css('display','block');
        } else {
          $(this).siblings().parent().parent().parent().first().siblings().eq(13).css('display','none');
        }
      });
      btn_return_mountains.on('mouseenter', function() {
        $(this).siblings().siblings().parent().siblings().eq(13).slideDown('slow');
        $(this).siblings().parent().slideUp('slow')
      });
    };

//Warsaw

function showingSectionWarsaw() {
    var btn_warsaw=$('.warsaw')
    var btn_return_warsaw = $('#return_warsaw');
    var ul=$('.photos_and_descriptions_warsaw')
    var article = $('article');

  btn_warsaw.on('click', function() {
    if ( $(window).width() > 569) {
      $(this).siblings().parent().parent().parent().first().siblings().siblings().eq(13).slideUp('slow');
      $(this).siblings().parent().parent().parent().first().siblings().eq(13).css('display','block')
    } else {
      $(this).siblings().parent().parent().parent().first().siblings().eq(13).css('display','none');
    }
  });
  btn_return_warsaw.on('mouseenter', function() {
    $(this).siblings().siblings().parent().siblings().eq(13).slideDown('slow');
    $(this).siblings().parent().slideUp('slow')
  });
};

//Cracow

function showingSectionCracow() {
    var btn_cracow=$('.cracow')
    var btn_return_cracow = $('#return_cracow');
    var ul=$('.photos_and_descriptions_cracow')
    var article = $('article');

  btn_cracow.on('click', function() {
    if ( $(window).width() > 569) {
      $(this).siblings().parent().parent().parent().first().siblings().siblings().eq(15).slideUp('slow');
      $(this).siblings().parent().parent().parent().first().siblings().eq(15).css('display','block')
    } else {
      $(this).siblings().parent().parent().parent().first().siblings().eq(15).css('display','none');
    }
  });
  btn_return_cracow.on('mouseenter', function() {
    $(this).siblings().siblings().parent().siblings().eq(15).slideDown('slow');
    $(this).siblings().parent().slideUp('slow')
  });
};


//SLIDERS

//Masuria and Mountains

$(document).ready(function() {
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

    $('.btn_next').on('click', function(){
      sliderRight();
        event.preventDefault();
    })

    btn_prev.on('click', function(){
      console.log("klik")
      sliderLeft();
      event.preventDefault();
    })
});

//Warsaw

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

    $('.btn_next').on('click', function(){
      sliderRight();
    })

    btn_prev.on('click', function(){
      console.log("klik")
      sliderLeft();
    })
});


//Cracow

$(document).ready(function() {
  console.log("working")
  var ul = $('.view_section_cracow ul');
  var li=ul = $('.view_section_cracow ul').find('li');
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

    $('.btn_next').on('click', function(){
      sliderRight();
    })

    btn_prev.on('click', function(){
      console.log("klik")
      sliderLeft();
    })
});


//VALIDATION CONTACT FORM

document.addEventListener("DOMContentLoaded", function() {

  function validationForm(event) {
    var name = $('#name').value;
    var lastName = $('#lastName').value;
    var email = $('#email').value;
    var message = $('#message').value;
    var error=false;

if(email.indexOf("@")===-1) {
  error = true;
}
if(name.length < 5) {
  error = true;
}
if(lastName.length < 5) {
  error = true;
}

if(message.length < 10) {
  error = true;
}

if(error) {
  event.preventDefault();
  alert("Try again")
} else {
  var form = document.querySelector("form").submit();
}
}

var form = document.querySelector("form");
form.addEventListener("submit", validationForm);

event.preventDefault();

});
