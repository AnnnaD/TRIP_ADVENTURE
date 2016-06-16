$(document).ready(function() {
  // console.log("test")

  // var wild_nature = $('#wild_nature');
  // animateMenu(wild_nature);
  // var urban_places = $('#urban_places');
  // animateMenu(urban_places);

  lightingButtons();

});


//MENU

// function animateMenu(element) {
//   var after = $('.after');
//   element.on('mouseenter', function() {
//     // after.slideDown('slow');
//     $(this).find('.after').animate({
//       visibility: 'visible'
//     },1000)
//   });
//
//   element.on('mouseleave', function() {
//     // after.slideUp('slow');
//     $(this).find('.after').css(
//       'visibility', 'hidden')
//   });
// }

//


// function urban() {
//
//   var urban_places = $('#urban_places');
//   var after = $('.after');
//
//   urban_places.on('mouseover', function() {
//         after.slideDown('slow');
//     });
//
//     urban_places.on('mouseleave', function() {
//           after.slideUp('slow');
//       });
// }


//LIGHTING BUTTONS

function lightingButtons() {

  var btn_more = $('.btn_more');
  var button = $('button');

  button.on('mouseover', function() {
    console.log("click");

      btn_more.addClass('shadow_btn');
    });
    button.on('mouseleave', function() {
      console.log("click");

    btn_more.removeClass('shadow_btn');
    });
}
