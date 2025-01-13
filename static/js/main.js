function scroll_to_id() {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
      }, 500, 'swing', function () {
        window.location.hash = target;
      });
    });
}
