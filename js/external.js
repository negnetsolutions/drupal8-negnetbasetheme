(function ($) {
  function setup_external_link_handler() {
    // Creating custom :external selector
    jQuery.expr[':'].external = function(obj){
      if( !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname) ) {
        return true;
      }
      return false;
    };

    //set all external link targets to _blank
    jQuery('a:external').attr('target','_blank');
    jQuery('a:external').attr('rel','noopener');
  }

  $(document).ready(function(){
    setup_external_link_handler();
  });

}(jQuery));
