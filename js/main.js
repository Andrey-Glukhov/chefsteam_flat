(function ($) {
  //var controller = new ScrollMagic.Controller();
  // slider  init
  $(".multiple-items").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    //adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".speakers-items").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //<< Scroll animations
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement: '.unit_container.contact',
  //     duration: '100%',
  //     triggerHook: 0.8
  // })
  // //.addIndicators()
  // .setTween(gsap.to('.side_pic.pic_left_2',{y: '-20vh'}))
  // .addTo(controller);

  // scene = new ScrollMagic.Scene({
  //   triggerElement: '.unit_container.contact',
  //   duration: '100%',
  //   triggerHook: 0.8
  // })
  // //.addIndicators()
  // .setTween(gsap.to('.side_pic.pic_left_1',{y: '-30vh'}))
  // .addTo(controller);
  // scene = new ScrollMagic.Scene({
  //   triggerElement: '.unit_container.contact',
  //   duration: '100%',
  //   triggerHook: 0.8
  // })
  // //.addIndicators()
  // .setTween(gsap.to('.side_pic.pic_right_1',{top: '-37vh'}))
  // .addTo(controller);

  // $('#accordion').on('click', '.accordion-header', function(e){
  //   e.preventDefault(); //prevent default action of a button
  //   $(this) //get the element the user clicked on
  //     .next('.accordion-panel') //select the next accordion panel
  //     .not(':animated') //if it is not currently animating
  //     .slideToggle(); //use slideToggle to show or hide it
  // });
  $("#accordion").accordion({
    active: true,
    collapsible: true,
    heightStyle: "content",
    header: "> .accordion-item > .accordion-header",
  });
  // $(window).on('load', function() {
  //   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  // });

  $(window).on("load", function () {
    $("body").addClass("loaded_hiding");
    window.setTimeout(function () {
      $("body").addClass("loaded");
      $("body").removeClass("loaded_hiding");
    }, 500);
  });
  //>>
  // Statr/stop video on scroll
  // var options = {
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }

  // function callback(entries, observer) {
  //   entries.forEach(entry => {
  //     var videoElem = document.querySelector('video');
  //     if (! videoElem) {
  //       return
  //     }
  //     if (entry.isIntersecting) {
  //       videoElem.play();
  //     }
  //     else {
  //       videoElem.pause();
  //     }
  //   });
  // };

  // var elementToObserve = document.querySelector('#video_wrapper');
  // var observer = new IntersectionObserver(callback, options);
  // observer.observe(elementToObserve);

  //Scroll to button
  var downButton = document.querySelector(".button_part");
  if (downButton) {
    downButton.addEventListener("click", function () {
      document.querySelector(".offer").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
  //Scroll to section
  downButton = document.querySelector(".button_programm");
  if (downButton) {
    downButton.addEventListener("click", function () {
      document.querySelector(".question").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
  //Togge video
  // downButton = document.querySelector("#rect851");
  // if (downButton) {
  //   downButton.addEventListener("click", function () {
  //    var videoElem = document.querySelector("video");
  //     if (!videoElem) {
  //       return;
  //     }
  //     if (videoElem.paused) {
  //       videoElem.play();
  //     } else {
  //       videoElem.pause();
  //     }
  //   });
  // }
  // var videoObj = document.querySelector("video");
  // videoObj.addEventListener(
  //   "play",
  //   function () {
  //     //playBtn.innerText = "Pause";
  //     document.querySelector("#rect851").style.fill='#f42126';
  //   },
  //   false
  // );
  // videoObj.addEventListener(
  //   "pause",
  //   function () {
  //     //playBtn.innerText = "Play"; fdd4a9
  //     document.querySelector("#rect851").style.fill='#fdd4a9';
  //   },
  //   false
  // );

  //Scroll to with jQery
  // $('a[href*="#"]')
  // // Remove links that don't actually link to anything
  // .not('[href="#"]')
  // .not('[href="#0"]')
  // .click(function(event) {
  //   // On-page links
  //   if (
  //     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  //     &&
  //     location.hostname == this.hostname
  //   ) {
  //     // Figure out element to scroll to
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     // Does a scroll target exist?
  //     if (target.length) {
  //       // Only prevent default if animation is actually gonna happen
  //       event.preventDefault();
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000, function() {
  //         // Callback after animation
  //         // Must change focus!
  //         var $target = $(target);
  //         $target.focus();
  //         if ($target.is(":focus")) { // Checking if the target was focused
  //           return false;
  //         } else {
  //           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //           $target.focus(); // Set focus again
  //         };
  //       });
  //     }
  //   }
  // });
  setupControl();
})(jQuery);

function setupControl() {
  var myVideo = document.querySelector(".embed_video");
       if (myVideo.canPlayType) {
          // remove the default buttons 
          myVideo.removeAttribute("controls");
          myVideo.addEventListener("ended", endPlayback, false);
          myVideo.addEventListener("click", pausePlayback, false);
          var vidButton = document.querySelector('.vid_button');
          vidButton.addEventListener("click", startPlayback, false);

}

  function startPlayback(e) {
      var buttonPressed = e.target;
      var myVideo = buttonPressed.parentElement.firstElementChild.querySelector('.embed_video');
      myVideo.style.display = 'block';
      myVideo.play();
      buttonPressed.style.display = 'none';
  }

  function pausePlayback(e) {
      var myVideo = e.target;
      myVideo.pause();
      myVideo.style.display = 'none';
      var vidButton = document.querySelector('.vid_button');
      vidButton.style.display = 'block';
  }

  // function togglePlayback(e) {
  //     var myVideo = e.target;
  //     //var myVideo = buttonPressed.parentElement.firstElementChild;
  //     if (myVideo.paused) {
  //         myVideo.play();
  //         myVideo.nextElementSibling.style.display = 'none';
  //     } else {
  //         myVideo.pause();
  //         myVideo.nextElementSibling.style.display = 'block';
  //     }


      // buttonPressed.previousElementSibling.style.display = 'block';
      // buttonPressed.style.display = 'none';
  //}


  function endPlayback(e) {
      var myVideo = e.target;
      myVideo.nextElementSibling.style.display = 'block';
      myVideo.nextElementSibling.nextElementSibling.style.display = 'none';
  }

}
