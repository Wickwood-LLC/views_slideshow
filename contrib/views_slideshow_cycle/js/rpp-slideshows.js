(function ($) {
  // Update the window dimensions on each resize.
  $(window).on("resize", function () {
    Drupal.behaviors.views_slideshow_test.onResize();
  });

  Drupal.behaviors.views_slideshow_test = {

    attach: function (context) {
      this.onResize();
    },

    onResize: function () {
      $('.rpp-load-always:visible').once('rpp-views-slideshow', function(){
        Drupal.behaviors.viewsSlideshowCycle.attach(this);
      });
    }

  };

})(jQuery);
