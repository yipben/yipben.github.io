$(document).ready(function() {

    var cutoff = .3 * $(document).height()
    console.log(cutoff)
    
    $('#main-nav li a').click(function(e) {
        
        var headerHeight = $('header').outerHeight();
        var targetHref = $(this).attr('href');
        var whichClass = $(this).attr('class');
        
        
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight
        }, 1000)
      
        // $('#main-nav li a').not(this).attr('class', '')
        // $(this).attr('class', 'current')

        e.preventDefault();
    });

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
  
        if (scrollPos >= cutoff) {
            $('#res_link').attr('class', 'current');
            $('#main-nav li a').not('#res_link').attr('class', '');
        } else {
            $('#res_link').attr('class', '');
            $('#main-nav li a').not('#res_link').attr('class', 'current');
        }
        
    });

  });

  