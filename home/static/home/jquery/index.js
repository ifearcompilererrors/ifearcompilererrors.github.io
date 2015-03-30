$(document).ready(function(){

var k = Math.random()*1000; // number of stars
var j = 100; // justify position

for(var i = 0; i < k; ++i){
    $("#sky").append("<div class='star' style='position:absolute;top:"+(Math.random()*j)+";left:"+(Math.random()*j-150)+";'""></div>");
}

function twinkle(){
    var $star = $(".star");
    $star.delay((Math.random()*100)+1200);
    $star.animate({opacity:'+=1'}, 100);
    $star.animate({opacity:'=1'}, 100);
    $star.animate({opacity:'-=0.5'}, 100, twinkle);
}

twinkle();

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