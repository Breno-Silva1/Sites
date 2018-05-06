$(function() {
  $('#voltar-topo').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#voltar-topo').fadeIn();
    } else {
      $('#voltar-topo').fadeOut();
    }
  });
  $('#voltar-topo').click(function() {
    $('html, body').animate({
      scrollTop: 0
    });
  });
});