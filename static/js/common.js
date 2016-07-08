$(document).ready(function() {

  //Menu show
  $(".home_content .content_menu ul .mines_l").on("click", function() {
    $(".home_content .mines").css({"display": "block"});
    $(".home_content .mines").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .facade_l").on("click", function() {
    $(".home_content .facade").css({"display": "block"});
    $(".home_content .facade").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .floors_l").on("click", function() {
    $(".home_content .floors").css({"display": "block"});
    $(".home_content .floors").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .roofs_l").on("click", function() {
    $(".home_content .roofs").css({"display": "block"});
    $(".home_content .roofs").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .systems_l").on("click", function() {
    $(".home_content .systems").css({"display": "block"});
    $(".home_content .systems").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .ceilings_l").on("click", function() {
    $(".home_content .ceilings").css({"display": "block"});
    $(".home_content .ceilings").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .formworks_l").on("click", function() {
    $(".home_content .formworks").css({"display": "block"});
    $(".home_content .formworks").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .balcones_l").on("click", function() {
    $(".home_content .balcones").css({"display": "block"});
    $(".home_content .balcones").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .transports_l").on("click", function() {
    $(".home_content .transports").css({"display": "block"});
    $(".home_content .transports").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .hobby_l").on("click", function() {
    $(".home_content .hobby").css({"display": "block"});
    $(".home_content .hobby").animate({
      "opacity": 1
    }, 500)
  });
  $(".home_content .content_menu ul .walls_l").on("click", function() {
    $(".home_content .walls").css({"display": "block"});
    $(".home_content .walls").animate({
      "opacity": 1
    }, 500)
  });

  $(".link_back").on("click", function hideMenu() {
    setTimeout(function() {
      $(".link_back").parent().css({"display" : "none"})
    }, 500)

    $(this).parent().animate({
      "opacity": 0
    }, 500);
  })


  //Home menu
  $(".home_content .content_block .walls_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .roofs").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
    }, 500)

    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .walls").css({"display": "block"});
    $(".home_content .walls").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .roofs_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .roofs").css({"display": "block"});
    $(".home_content .roofs").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .systems_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .systems").css({"display": "block"});
    $(".home_content .systems").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .formworks_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);

    $(".home_content .formworks").css({"display": "block"});
    $(".home_content .formworks").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .facade_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .facade").css({"display": "block"});
    $(".home_content .facade").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .mines_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .mines").css({"display": "block"});
    $(".home_content .mines").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .floors_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .floors").css({"display": "block"});
    $(".home_content .floors").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .ceilings_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .ceilings").css({"display": "block"});
    $(".home_content .ceilings").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .balcones_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .balcones").css({"display": "block"});
    $(".home_content .balcones").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .transports_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .hobby").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .hobby").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .transports").css({"display": "block"});
    $(".home_content .transports").animate({
      "opacity": 1
    }, 500)
  });

  $(".home_content .content_block .hobby_p").on("click", function() {
    setTimeout(function() {
      $(".home_content .walls").css({"display": "none"});
      $(".home_content .systems").css({"display": "none"});
      $(".home_content .formworks").css({"display": "none"});
      $(".home_content .mines").css({"display": "none"});
      $(".home_content .floors").css({"display": "none"});
      $(".home_content .ceilings").css({"display": "none"});
      $(".home_content .balcones").css({"display": "none"});
      $(".home_content .transports").css({"display": "none"});
      $(".home_content .facade").css({"display": "none"});
      $(".home_content .roofs").css({"display": "none"});
    }, 500)

    $(".home_content .walls").animate({
      "opacity": 0
    }, 500);
    $(".home_content .systems").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .mines").animate({
      "opacity": 0
    }, 500);
    $(".home_content .floors").animate({
      "opacity": 0
    }, 500);
    $(".home_content .ceilings").animate({
      "opacity": 0
    }, 500);
    $(".home_content .balcones").animate({
      "opacity": 0
    }, 500);
    $(".home_content .transports").animate({
      "opacity": 0
    }, 500);
    $(".home_content .facade").animate({
      "opacity": 0
    }, 500);
    $(".home_content .roofs").animate({
      "opacity": 0
    }, 500);
    $(".home_content .formworks").animate({
      "opacity": 0
    }, 500);

    $(".home_content .hobby").css({"display": "block"});
    $(".home_content .hobby").animate({
      "opacity": 1
    }, 500)
  });

  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    cursor: 'mfp-zoom-out-cur',
    gallery: {
      enabled: true
    },
  });

  $(function(){
    $('#Container').mixItUp();
  });


  //Point hover
  $(".home_content .content_menu ul .walls_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_walls span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_walls .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_walls span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_walls .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );

    $(".home_content .content_menu ul .facade_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_facades span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_facades .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_facades span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_facades .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );

  $(".home_content .content_menu ul .floors_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_floors span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_floors .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_floors span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_floors .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );
  $(".home_content .content_menu ul .roofs_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_roofs span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_roofs .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_roofs span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_roofs .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );
    $(".home_content .content_menu ul .systems_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_systems span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_systems .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_systems span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_systems .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );
  $(".home_content .content_menu ul .ceilings_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_ceilings span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_ceilings .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(".home_content .points .point_outer_ceilings span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_ceilings .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(this).css({"color": "#ececec"});
      }
  );
    $(".home_content .content_menu ul .formworks_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_formworks span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_formworks .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(".home_content .points .point_outer_formworks span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_formworks .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(this).css({"color": "#ececec"});
      }
  );
  $(".home_content .content_menu ul .balcones_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_balcones span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_balcones .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(".home_content .points .point_outer_balcones span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_balcones .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(this).css({"color": "#ececec"});
      }
  );
    $(".home_content .content_menu ul .transports_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_transports span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_transports .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_transports span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_transports .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );
  $(".home_content .content_menu ul .hobby_l").hover(
      function() {
        $(this).css({"color": "#fac11d"});
        $(".home_content .points .point_outer_hobby span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_hobby .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        })
      }, function() {
        $(this).css({"color": "#ececec"});
        $(".home_content .points .point_outer_hobby span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_hobby .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        })
      }
  );

  //DOT hover
  $(".home_content .points .point_outer_hobby .point_hobby").hover(
      function() {
        $(".home_content .points .point_outer_hobby span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_hobby .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .hobby_l").css({
          "color": "#fac11d",
        })
      }, function() {
        $(".home_content .points .point_outer_hobby span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_hobby .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .hobby_l").css({
          "color": "#ececec",
        })
      }
  );
  $(".home_content .points .point_outer_transports .point_transports").hover(
      function() {
        $(".home_content .points .point_outer_transports span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_transports .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .transports_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_transports span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_transports .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .transports_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_balcones .point_balcones").hover(
      function() {
        $(".home_content .points .point_outer_balcones span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_balcones .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .balcones_l").css({
          "color": "#fac11d",
        })
      }, function() {
        $(".home_content .points .point_outer_balcones span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_balcones .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .balcones_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_formworks .point_formworks").hover(
      function() {
        $(".home_content .points .point_outer_formworks span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_formworks .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .formworks_l").css({
          "color": "#fac11d",
        })
      }, function() {
        $(".home_content .points .point_outer_formworks span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_formworks .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .formworks_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_roofs .point_roofs").hover(
      function() {
        $(".home_content .points .point_outer_roofs span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_roofs .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .roofs_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_roofs span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_roofs .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .roofs_l").css({
          "color": "#ececec",
        })
      }
  );
  $(".home_content .points .point_outer_systems .point_systems").hover(
      function() {
        $(".home_content .points .point_outer_systems span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_systems .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .systems_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_systems span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_systems .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .systems_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_ceilings .point_ceilings").hover(
      function() {
        $(".home_content .points .point_outer_ceilings span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_ceilings .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .ceilings_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_ceilings span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_ceilings .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .ceilings_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_floors .point_floors").hover(
      function() {
        $(".home_content .points .point_outer_floors span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_floors .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .floors_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_floors span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_floors .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .floors_l").css({
          "color": "#ececec",
        })
      }
  );
  $(".home_content .points .point_outer_facades .point_facades").hover(
      function() {
        $(".home_content .points .point_outer_facades span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_facades .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .facade_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_facades span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_facades .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .facade_l").css({
          "color": "#ececec",
        });
      }
  );
  $(".home_content .points .point_outer_walls .point_walls").hover(
      function() {
        $(".home_content .points .point_outer_walls span").css({
          "color": "#fac11d",
          "opacity": 0,
        });
        $(".home_content .points .point_outer_walls .point_image img").css({
          "opacity": 1,
          "zIndex": 1000,
        });
        $(".home_content .content_menu ul .walls_l").css({
          "color": "#fac11d",
        });
      }, function() {
        $(".home_content .points .point_outer_walls span").css({
          "color": "#fff",
          "opacity": 1,
        });
        $(".home_content .points .point_outer_walls .point_image img").css({
          "opacity": 0,
          "zIndex": 1,
        });
        $(".home_content .content_menu ul .walls_l").css({
          "color": "#ececec",
        });
      }
  );
});
