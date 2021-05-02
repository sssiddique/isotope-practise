// (function($){
//     'use strict';

//     $('#container').imagesLoaded( function() {
//         $('.grid').isotope({
//             itemSelector: '.grid-item',
//             percentPosition: true,
//             masonry: {
//               // use outer width of grid-sizer for columnWidth
//               columnWidth: '.grid-sizer'
//             }
//           })
//       });


//     /* Activation code */
   

// })(jquery)

// init Isotope




(function($){
    'use strict';

    $('#container').imagesLoaded( function() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.grid-sizer'
            }
          })
      });


    /* Activation code */

})(jquery)

init Isotope