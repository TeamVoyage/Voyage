(function() {
  $('.priceButtons input[type=radio]').change(function() {
    $('.priceButtons input[type=radio]').each(function(i) {
      if ($(this).prop('checked')) {
        $(this).parent().addClass('toggleOption');
      } else {
        $(this).parent().removeClass('toggleOption');
      }
    })
  })

  $('.categoryText input[type=checkbox]').change(function() {
    $(this).parent().toggleClass('toggleOption');
  })
})();
