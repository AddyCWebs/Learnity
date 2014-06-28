offsetcolors = 0;

$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('#sun').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() * $scroll.data('speed')); 
         
        // background position
        var deg = 'rotate(' + yPos + 'deg)';
 
        // move the background
        $scroll.css({ '-webkit-transform': deg });    
      }); // end window scroll
   });  // end section function

   $('#navbar').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = 1 - $window.scrollTop() * $scroll.data('speed') / 20;
 
        // move the background
        $scroll.css({ 'opacity': yPos });

        if(yPos <= 0) {
          $scroll.css({ 'display': 'none' });
        } else {
          $scroll.css({ 'display': 'block' });
        }
      }); // end window scroll
   });  // end section function
}); // close out script

$("#circle").css('top', ($(window).height() - $("#circle").height())/2);
$("#circle").children("h1").css("margin-top", ($("#circle").height() - $("#circle").children("h1").height())/2)

function floatd() {
  $("#scrlwrp").animate({bottom: "-10"}, function() {
    floatu()
  })
}

function floatu() {
  $("#scrlwrp").animate({bottom: 0}, function() {
    floatd()
  })
}

$('.image').each(function() {
  $(this).css('height', $(this).parent().children(".srcheight").height())
  console.log('OK')
})

floatd();

$('#autonomie').waypoint(function(direction) {
  if(direction == 'down') {
    $('.ai').animate({
      'top': 0,
      'opacity': 1,
    }, 'slow')
  }
}, {
  offset: function() {
    return $(window).height()/3;
  }
});

$('#social').waypoint(function(direction) {
  if(direction == 'down') {
    $('.si').animate({
      'top': 0,
      'opacity': 1,
    }, 'slow')
  }
}, {
  offset: function() {
    return $(window).height()/3;
  }
});