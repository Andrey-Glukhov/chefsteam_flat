(function($) {
   //var controller = new ScrollMagic.Controller();
    // slider  init
     $('.multiple-items').slick({
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
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
    $('#accordion').accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content',
      header: '> .accordion-item > .accordion-header'
    });
    // $(window).on('load', function() {
    //   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    // });

    $(window).on('load', function () {
      $('body').addClass('loaded_hiding');
      window.setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
      }, 500);
    });
    //>>

    var options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    
    function callback(entries, observer) { 
      entries.forEach(entry => {
        var videoElem = document.querySelector('video');
        if (! videoElem) {
          return
        }
        if (entry.isIntersecting) {
          videoElem.play();
        }
        else {
          videoElem.pause();
        }
      });
    };
    
    var elementToObserve = document.querySelector('#video_wrapper');
    var observer = new IntersectionObserver(callback, options);
    
    observer.observe(elementToObserve);
    }(jQuery) );