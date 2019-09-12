$(() => {
  $("#down-arrow").on('click', function() {
    const form = $('.new-tweet');
    const textArea = $('textarea');
    if (form.css('display') === 'none') {
      form.slideDown(100);
      textArea.focus();
    } else {
      form.slideUp(100);
    }
  });
});
