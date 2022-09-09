(function ($) {
    "use strict";
    $(window).load(function () {
      $("body").addClass("loaded");
      $(".loader").fadeOut(200);
    });
    $(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      horizontalOffset: 0,
      verticalOffset: 0,
    });
    var navbar = $(".navbar");
    var navbarAffixHeight = 56;
    $(".navbar-collapse").on("show.bs.collapse", function () {
      navbar.addClass("affix");
    });
    $(".navbar-collapse").on("hidden.bs.collapse", function () {
      if (navbar.hasClass("affix-top")) {
        navbar.removeClass("affix");
      }
    });
    $(".navbar-nav > li > a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
    navbar.affix({ offset: { top: 1 } });
    navbar.on("affixed-top.bs.affix", function () {
      if ($(".navbar-collapse").hasClass("in")) {
        navbar.addClass("affix");
      }
    });
    $(".js-scroller").on("click", function (e) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $("html,body").animate(
          { scrollTop: target.offset().top - navbarAffixHeight + 1 },
          1000
        );
      }
    });
    $("body").scrollspy({ offset: navbarAffixHeight + 1 });
    $(".js-isotope").imagesLoaded(function () {
      $(".js-isotope").isotope({
        layoutMode: "masonry",
        itemSelector: ".js-isotope-item",
      });
    });
    $(".js-play").magnificPopup({ type: "iframe" });
    $(".review-carousel").owlCarousel({
      itemsCustom: [[0, 1]],
      responsiveRefreshRate: 0,
      autoHeight: true,
      navigation: false,
    });
  })(jQuery);
  