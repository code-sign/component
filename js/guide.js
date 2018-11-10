/****************************/
/* UI Guide Motion          */
/****************************/

const guide = function(){

    // Section Tit
    TweenMax.fromTo($('.sec_tit'),1,
        {opacity:0, y:10},
        {opacity:1, y:0}
    );

    // UI link
    var uiLink = $('.ui_link');
    var uiLinkHeightOrigin = uiLink.innerHeight();
    var uiLinkOffset = uiLink.offset().top;

    uiLink.find('a').on('click', function(){
        var uiId = $(this).text();
        
        var uiLinkHeight = uiLink.innerHeight() - 5;
        var uiIdTop =  $('#ui'+uiId).offset().top - uiLinkHeight;

        // before fix
        if(!$(this).parent().hasClass('fix')){
            uiIdTop =  $('#ui'+uiId).offset().top - uiLinkHeightOrigin - uiLinkHeight/1.4;
        }

        $('html,body').stop().animate({scrollTop:uiIdTop});
    });


    // Go Top
    var goTop = $('.go_top');
    var _window = $(window);
    var winSc = _window.scrollTop();
    var isTop = true;
    var isFix = false;

    goTop.on('click', function(){
        $('html,body').stop().animate({scrollTop:0});
    });

    // scroll
    _window.on('scroll', function(){
        winSc = _window.scrollTop();

        // goTop
        if(!isTop){
            if(winSc == 0){
                isTop = true;
                goTop.stop().fadeOut();
            } 
        } else{
            if(winSc > 0){
                goTopShow();
            } 
        }

        // fixLink
        if(!isFix){
            if(winSc >= uiLinkOffset){
                isFix = true;
                uiLink.addClass('fix');
            } 
        } else{
            if(winSc < uiLinkOffset){
                isFix = false;
                uiLink.removeClass('fix');
            } 
        }

    });

    if(winSc !== 0){
        goTopShow();
    }

    function goTopShow(){
        isTop = false;
        goTop.stop().fadeIn();
    }

}

export default guide;
