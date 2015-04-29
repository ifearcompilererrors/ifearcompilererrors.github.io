$(document).ready(function(){

for(var i = 0; i < 30; ++i)
{
    var cx = Math.floor(Math.random()*100);
    var cy = Math.floor(Math.random()*100);
    d3.select("svg.sky")
        .append("circle")
        .attr("r", 1)
        .attr("cx", cx+"%")
        .attr("cy", cy+"%")
        .attr("fill", "white")
        .attr("class", "twinkle1");
}

for(var i = 0; i < 40; ++i)
{
    var cx = Math.floor(Math.random()*100);
    var cy = Math.floor(Math.random()*100);
    d3.select("svg.sky")
        .append("circle")
        .attr("r", 1)
        .attr("cx", cx+"%")
        .attr("cy", cy+"%")
        .attr("fill", "white")
}

for(var i = 0; i < 30; ++i)
{
    var cx = Math.floor(Math.random()*100);
    var cy = Math.floor(Math.random()*100);
    d3.select("svg.sky")
        .append("circle")
        .attr("r", 1)
        .attr("cx", cx+"%")
        .attr("cy", cy+"%")
        .attr("fill", "white")
        .attr("class", "twinkle2");
}

/*console.log($("circle").length);

function twinkle(){
    var c = $("circle");
    while(c){
        var i = Math.floor(Math.random())*c.length;
        var star = c.eq(i);

        star.delay((Math.random()*100)+1200);
        star.animate({opacity:'+=1'}, 100);
        star.animate({opacity:'=1'}, 100);
        star.animate({opacity:'-=0.5'}, 100);

        c.splice(i,1);
    }
}

twinkle();*/

/* make 'em shine */
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
    $star.animate({opacity:'-=0.3'}, 100, twinkle2);
}

twinkle1();
twinkle2();

$(".welcome-text").fadeIn(2000);

/* animate scroll to about section */
$('.anchorLink').click(function(){
    $('html, body').animate({
        scrollTop: "800%"
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