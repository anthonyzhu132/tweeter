const maxChars = 140;

$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    const characters = $(this).val().length;
    const counter = maxChars - characters;
    if (counter < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
    $(".counter").text(counter);
  });
});