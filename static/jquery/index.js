$(document).ready(function(){

$('.anchorLink').click(function(){
	$('html, body').animate({
		scrollTop: "800px"
	}, 800);
});

var $window = $(window);

$('section[data-type="background"]').each(function()
{
	var $bgobj = $(this);
	$(window).scroll(function()
	{
		var yPos = -($window.scrollTop() / $bgobj.data('speed'));
		var coords = '50%' + yPos + 'px';
		$bgobj.css({ backgroundPosition:coords });
	});
});

/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hide-me').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window+1200 > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1100);
                    
            }
            
        }); 
    
    });


});