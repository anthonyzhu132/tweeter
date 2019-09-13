$(() => {
  $("#down-arrow").on('click', function() {
    const form = $('.new-tweet');
    const textArea = $('textarea');
    if (form.css('display') === 'none') {
      form.slideDown(200);
      textArea.focus();
    } else {
      form.slideUp(200);
    }
  });
});
