/* ---------------------------------------------
     mobile-menu
--------------------------------------------- */
const navSlide = () => {
    const burger = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav .menu-list .menu-item");
    
    const menuClose = document.querySelector(".menu-close-btn");
  
    burger.addEventListener("click", () => {
      nav.classList.add("show-menu");
      
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${
            index / 10 + 0.5
          }s `;
        }
      });
      // burger.classList.toggle("toggle");
    });

    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${
            index / 10 + 0.5
          }s `;
        }
      });
      
      // burger.classList.toggle("toggle");
    });

  };
  
  navSlide();

  /* ---------------------------------------------
     mobile-drop-down
--------------------------------------------- */

$(".main-nav .bi").on('click', function (event) {
  var $fl = $(this);
  $(this).parent().siblings().find('.sub-menu').slideUp();
  $(this).parent().siblings().find('.bi').addClass('bi-plus-lg');
  if ($fl.hasClass('bi-plus-lg')) {
      $fl.removeClass('bi-plus-lg').addClass('bi-dash-lg');
  } else {
      $fl.removeClass('bi-dash-lg').addClass('bi-plus-lg');
  }
  $fl.next(".sub-menu").slideToggle();
});