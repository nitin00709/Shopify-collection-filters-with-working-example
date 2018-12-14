$( document ).ready(function() {      
      jQuery('.advanced-filter').each(function() {
            var el = jQuery(this)
                ,group = el.data('group');

            if ( el.hasClass('active-filter') ) { //Remove class hidden
                el.parents('.sb-filter').find('a.clear-filter').removeClass('hidden');
            }
        });
      
      jQuery('.advanced-filter').on('click', function(e) {
         var el = $(this)
             ,group = el.data('group')
             ,url = el.find('a').attr('href')

         // Continue as normal if we're clicking on the active link
         if ( el.hasClass('active-filter') ) {
           return;
         }
           var _logic = jQuery(".filters-sidebar").data('logic');
           if( _logic ){
             // Get active group link (unidentified if there isn't one)
             activeTag = $('.active-filter[data-group="'+ group +'"]');

             // If a tag from this group is already selected, remove it from the new tag's URL and continue
             if ( activeTag && activeTag.data('group') === group ) {
               e.preventDefault();
               activeHandle = activeTag.data('handle') + '+';

               // Create new URL without the currently active handle
               url = url.replace(activeHandle, '');

               window.location = url;
             }
           }
       });
    });
