/****************************/
/* Toggle                   */
/****************************/
/*  
    * 기본토글
    다른 토글 클릭시 열려진 토글 닫음
    외부 영역 클릭시 열려진 토글 닫음

    * 모션토글 .motion
    토글컨텐츠 영역 슬라이드 모션

    * 오픈토글 .open
    열려져 있는 토글 / 본인을 다시 토글해야 닫음
    다른 토글 & 외부 영역을 클릭해도 닫지 않음
*/

const toggle = function(){

    var tgTit = $('.tg_tit');
    var tgCont = $('.tg_cont');
    var isShowToggle = false;

    $('.toggle').each(function(){
        var _this = $(this);
        var _thisTgTit = _this.find('.tg_tit');

        _thisTgTit.on('click', function(){
            isShowToggle = true;

            if($(this).hasClass('on')){
                $(this).removeClass('on').next('.tg_cont').hide();
            } else {

                // open toggle
                if(!$(this).parent().hasClass('open')){
                    tgTit.removeClass('on');
                    tgCont.hide();
                }
                
                $(this).addClass('on').next('.tg_cont').show();
                slideMotion($(this),$('.tg_cont'));
            }
        });
    });

    $(document).on('click touchstart', function(e){
        var openToggleLeng = $('.tg_tit.on').parent('.open').length == 0;
        if(openToggleLeng && isShowToggle && !$(e.target).parents().hasClass('toggle')){
            initToggle();
        }
    });

    function initToggle(){
        isShowToggle = false;
        tgTit.removeClass('on');
        tgCont.hide();
    }


    function slideMotion(_this, nextElem){
        if(_this.parent().hasClass('motion')){
            TweenMax.from(_this.next(nextElem),.6,
            {
                height:0, 
                ease:Power4.easeOut,
                transformOrigin:'left top'
            });
        } 
    }

}


export default toggle;