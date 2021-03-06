/****************************/
/* Tab                      */
/****************************/
const tab = function(){

    $('.tab_group').each(function(){
        var _this = $(this);
        var tabHead = _this.find('.tab_head a');
        var tabHeadWid = tabHead.innerWidth();
        var tabCont = _this.find('.tab_cont > .tcon');
        var line = _this.find('.line');
        var conPosX = $('#container').offset().left + 1; //alignment 

        // Resize line Width reset
        $(window).on('resize', function(){
            tabHeadWid = tabHead.innerWidth();
            line.css({width:tabHeadWid});
        });

        tabHead.on('click', function(){
            var tabIdx = $(this).parent('li').index();
            tabHead.parent('li').removeClass('on').eq(tabIdx).addClass('on');
            tabCont.removeClass('on').eq(tabIdx).addClass('on');

            // motion
            if($(this).parents().hasClass('motion')){
                TweenMax.from(tabCont.eq(tabIdx), 1, {opacity:0, y:5});
            }
        });

        // Move tab
        if($(this).hasClass('move')){
            line.css({width:tabHeadWid});
            tabHead.on('click', function(){
                var thisA = $(this);
                var thisXpos = thisA.offset().left - conPosX;
                tabHeadWid = thisA.innerWidth();

                line.css({width:tabHeadWid});
                TweenMax.to(line,.4,{left:thisXpos - 30});
            });

            // Resize xPos reset
            $(window).on('resize', function(){
                conPosX = $('#container').offset().left; //first container posX check
                var activeA = _this.find('.on');
                var thisXpos = activeA.offset().left - conPosX;
                tabHeadWid = activeA.innerWidth();
                line.css({width:tabHeadWid+1,left:thisXpos - 30});
            });
        }
    });

}

export default tab;
