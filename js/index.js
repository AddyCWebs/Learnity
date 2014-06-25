$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('#sun').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var deg = 'rotate(' + 0 - yPos + 'deg)';
 
        // move the background
        $scroll.css({ transform: coords });    
      }); // end window scroll
   });  // end section function
}); // close out script