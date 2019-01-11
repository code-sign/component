/****************************/
/* Motion                   */
/****************************/

const motion = function(){

    $('.btn_motion').each(function(){
        $(this).on('click', function(e){
            var motionWrap = $(this);
            var ripple = $(this).find('.effect');
            motionWrap.removeClass('on');
            var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
            var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
            ripple.css({top:y, left:x});
            motionWrap.addClass('on');
        });
    });


    // micro
    $('.micro > a').on('click', function(){
        $(this).parent('.micro').toggleClass('on');
    });
    setInterval(function(){
        $('.micro > a').each(function(){
            $(this).parent('.micro').toggleClass('on');
        });
    },2000);

    //micro - music 
    setInterval(function(){
        $('.music').find('span').each(function(){
            var ranN = Math.floor(Math.random(0)*10);
            //console.log(ranN);
            $(this).css({'height':4*ranN+'px'});
        });
    },130);

}

export default motion;
