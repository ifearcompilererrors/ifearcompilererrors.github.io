$(document).ready(function(){

var midStars = 60; /* number of untwinkling stars in middle */
var twinkleStarsMid = 25; /* number of twinkling stars */
var mid = 1000; /* justify position */

var leftRightStars = 20; /* number of left and right stars */
var left = 100; /* justify position */
var right = 1000; /* justify position */

for(var i = 0; i < midStars; ++i)
{
    $("#sky").append("<span class='star' style='position:absolute;top:"+(Math.random()*mid)+"px;left:"+(Math.random()*mid+100)+"px;'></span>");
}

for(var i = 0; i < leftRightStars; ++i)
{
    $("#sky").append("<span class='star' style='position:absolute;top:"+(Math.random()*left*10)+"px;left:"+(Math.random()*left)+"px;'></span>");
}

for(var i = 0; i < leftRightStars; ++i)
{
    $("#sky").append("<span class='star' style='position:absolute;top:"+(Math.random()*right)+"px;left:"+(Math.random()*right+250)+"px;'></span>");
}

for(var i = 0; i < twinkleStarsMid; ++i)
{
    $("#sky").append("<span class='star twinkle1' style='position:absolute;top:"+(Math.random()*mid)+"px;left:"+(Math.random()*mid+100)+"px;'></span>");
}

for(var i = 0; i < twinkleStarsMid; ++i)
{
    $("#sky").append("<span class='star twinkle2' style='position:absolute;top:"+(Math.random()*mid)+"px;left:"+(Math.random()*mid+100)+"px;'></span>");
}

function twinkle1(){
    var $star = $(".twinkle1");
    $star.delay((Math.random()*100)+1200);
    $star.animate({opacity:'+=1'}, 100);
    $star.animate({opacity:'=1'}, 100);
    $star.animate({opacity:'-=0.5'}, 100, twinkle1);
}

function twinkle2(){
    var $star = $(".twinkle2");
    $star.delay((Math.random()*500)+200);
    $star.animate({opacity:'+=1'}, 100);
    $star.animate({opacity:'=1'}, 100);
    $star.animate({opacity:'-=0.5'}, 100, twinkle2);
}

twinkle1();
twinkle2();

$(".welcome-text").fadeIn(20000);

/* animate scroll to about section */
$('.anchorLink').click(function(){
    $('html, body').animate({
        scrollTop: "830vh"
    }, 800);
});


/* contact section motion parallax */
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

    /* ... check the location of each desired element */
    $('.hide-me').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window+1200 > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},1100);
                
        }
        
    }); 

});

});