var $j = jQuery.noConflict();

$j(function() {

    $j('#left-nav').stop().delay(500).animate({'marginLeft':'-205px'},500);
    $j('#right-nav').stop().delay(500).animate({'marginLeft':'-205px'},500, 'swing', function () {
        $j('.dimmable-content p').css({'color':'#333'});
    });

    $j('#left-nav').hover(
        function () {
            console.log('yay');
            $j('#left-nav').stop().animate({'marginLeft':'0'},300);
            $j('#right-nav').stop().animate({'marginLeft':'0'},300, 'swing', function () {
                $j('.dimmable-content p').css({'color':'#ccc'});
                $j('.dimmable-content').css({'color':'#333'});
            });
        },
        function () {
            $j('#left-nav').stop().animate({'marginLeft':'-205px'},300);
            $j('#right-nav').stop().animate({'marginLeft':'-205px'},300, 'swing', function () {
                $j('.dimmable-content p').css({'color':'#333'});
                $j('.dimmable-content').css({'color':'#333'});
            });
        }
    );

    $j('.left-image').hover(
        function() {
            $j(this).children('.left-image-text').fadeIn(200);
        },
        function() {
            $j(this).children('.left-image-text').fadeOut(200);
        }
    );

    $j('.right-image').hover(
        function() {
            $j(this).children('.right-image-text').fadeIn(200);
        },
        function() {
            $j(this).children('.right-image-text').fadeOut(200);
        }
    );


    // carousel code
    $j('#carousel-ul li:first').before($j('#carousel-ul li:last'));
    $j('#carousel-plus').click(function(){

        var item_width = $j('#carousel-ul li').outerWidth();
        var left_indent = parseInt($j('#carousel-ul').css('left')) - item_width;

        $j('#carousel-ul').animate({'left' : left_indent},500, 'swing',function(){
            $j('#carousel-ul li:last').after($j('#carousel-ul li:first'));
            $j('#carousel-ul').css({'left' : '-434px'});
        });
    });
});