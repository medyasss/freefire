(function ($) {
  "use strict";

  //Detect Closest Edge
  function closestEdge(x, y, w, h) {
    var topEdgeDist = distMetric(x, y, w / 2, 0);
    var bottomEdgeDist = distMetric(x, y, w / 2, h);
    var leftEdgeDist = distMetric(x, y, 0, h / 2);
    var rightEdgeDist = distMetric(x, y, w, h / 2);
    var min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );
    switch (min) {
      case leftEdgeDist:
        return "left";
      case rightEdgeDist:
        return "right";
      case topEdgeDist:
        return "top";
      case bottomEdgeDist:
        return "bottom";
    }
  }

  //Distance Formula
  function distMetric(x, y, x2, y2) {
    var xDiff = x - x2;
    var yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  }

  var boxes = document.querySelectorAll(".direction-hover");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onmouseenter = function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      var overlay = this.childNodes[1];
      var image = this.childNodes[0];

      switch (edge) {
        case "left":
          //tween overlay from the left
          overlay.style.top = "0%";
          overlay.style.left = "-100%";
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "right":
          overlay.style.top = "0%";
          overlay.style.left = "100%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "top":
          overlay.style.top = "-100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "bottom":
          overlay.style.top = "100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
      }
    };

    boxes[i].onmouseleave = function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      var overlay = this.childNodes[1];
      var image = this.childNodes[0];

      switch (edge) {
        case "left":
          TweenMax.to(overlay, 0.5, { left: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "right":
          TweenMax.to(overlay, 0.5, { left: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "top":
          TweenMax.to(overlay, 0.5, { top: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "bottom":
          TweenMax.to(overlay, 0.5, { top: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
      }
    };
  }

  // preloader
  function counter_num() {
    var count = setInterval(function () {
      var c = parseInt($(".counter").text());
      $(".counter").text((++c).toString());
      if (c === 100) {
        clearInterval(count);
        $(".counter").addClass("hide");
        $(".preloader").addClass("active");
      }
    });
  }
  counter_num();

  /* ---------------------------------------------
     Parallax
--------------------------------------------- */

  var image = document.getElementsByClassName("parralax-image");
  new simpleParallax(image, {
    orientation: "right",
    delay: 0.4,
  });

  // masonary-latest-collection
  var $grid = $(".grid").masonry({
    itemSelector: ".grid-item",
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

  /* ---------------------------------------------
     NiceSelect
--------------------------------------------- */

  $("select").niceSelect();

  /* ---------------------------------------------
     Magnific Popup video
--------------------------------------------- */

  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });

  /* ---------------------------------------------
     Sliders
     --------------------------------------------- */

  // COLLECTION-SLIDER
  var swiper = new Swiper(".collection-slider1", {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".coming-prev1",
      prevEl: ".coming-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // trending-slider1
  var swiper = new Swiper(".trending-slider1", {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".coming-prev1",
      prevEl: ".coming-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      // 576:{
      //   slidesPerView: 2
      // },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // latest-collection-slider
  var swiper = new Swiper(".latest-collection-slider", {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 5,
    loop: true,
    autoplay: true,
    // centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".latest-collection-prev1",
      prevEl: ".latest-collection-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // Road Map slider-1
  var roadmap1 = new Swiper(".swiper-roadmap-small", {
    loop: true,
    spaceBetween: 10,
    speed: 1400,
    slidesPerView: 3,
    navigation: {
      nextEl: ".roadmap-next1",
      prevEl: ".roadmap-prev1",
    },
    centeredSlides: true,
    breakpoints: {
      280: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
    },
  });
  var swiper2 = new Swiper(".swiper-roadmap-big", {
    loop: true,
    spaceBetween: 10,
    speed: 1400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".roadmap-next1",
      prevEl: ".roadmap-prev1",
    },
  });

  // Road Map slider-3
  var roadmap3Small = new Swiper(".swiper-roadmap3-small", {
    loop: true,
    spaceBetween: 15,
    speed: 1400,
    slidesPerView: 3,
    navigation: {
      nextEl: ".roadmap-next3",
      prevEl: ".roadmap-prev3",
    },
    centeredSlides: true,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
    },
  });
  var roadmap3Big = new Swiper(".swiper-roadmap3-big", {
    loop: true,
    spaceBetween: 20,
    speed: 1400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".roadmap-next3",
      prevEl: ".roadmap-prev3",
    },
  });

  // testimonial-slider
  var swiper = new Swiper(".testimonial1-slider", {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
    pagination: false,
  });

  var swiper = new Swiper(".testimonial-slider2", {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".testi-next3",
      prevEl: ".testi-prev3",
    },
    pagination: false,
  });

  // testimonial3-slider
  var swiper = new Swiper(".testimonial3-slider", {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".testi1-next",
      prevEl: ".testi1-prev",
    },
  });

  // roadmap-slider
  var swiper = new Swiper(".roadmap-slider2", {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".roadmap-prev2",
      prevEl: ".roadmap-next2",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // banner3-slider
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    autoplay: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    // autoplay: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });

  //blog3-slider
  var swiper = new Swiper(".blog3-slider", {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    mousewheel: true,
    parallax: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".blog-prev3",
      prevEl: ".blog-next3",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  // latest-single-slider
  var swiper = new Swiper(".latest-single-slider", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 15,
    effect: "creative",
    parallax: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, "100%"],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: true,
    loop: true,
    pagination: false,
  });

  var swiper = new Swiper(".latest-single-slider2", {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 15,
    effect: "creative",
    parallax: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, "100%"],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: true,
    loop: true,
    pagination: false,
  });

  // Collection thumb Slider
  var swiper = new Swiper(".collection-thumb-slider02", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });
  var swiper2 = new Swiper(".collection-thumb-slider01", {
    loop: true,
    freeMode: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // Odometer Counter

  $(".counter-single").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });

  // Instantiate `CircleType` with an HTML element.
  var CircleTypeText1 = document.getElementById("CircleTypeText1");
  if (CircleTypeText1 != null){
    new CircleType(document.getElementById("CircleTypeText1"));
  }
  var CircleTypeText2 = document.getElementById("CircleTypeText2");
  if (CircleTypeText2 != null){
    new CircleType(document.getElementById("CircleTypeText2"));
  }
  var CircleTypeText3 = document.getElementById("CircleTypeText3");
  if (CircleTypeText3 != null){
    new CircleType(document.getElementById("CircleTypeText3"));
  }

  var CircleTypeText4 = document.getElementById("CircleTypeText4");
  if (CircleTypeText4 != null){
    new CircleType(document.getElementById("CircleTypeText4"));
  }



  $(".marquee_text").marquee({
    direction: "left",
    duration: 50000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });
  $(".marquee_text1").marquee({
    direction: "left",
    duration: 50000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  /* ---------------------------------------------
     Text animation Morphext
--------------------------------------------- */
  $("#js-rotating").Morphext({
    // animation: "flopInY",
    animation: "lightSpeedIn",
    separator: ",",
    speed: 4000,
    complete: function () {},
  });

  console.log = console.warn = console.error = () => {};
})(jQuery);
