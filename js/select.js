/****************************/
/* Select                   */
/****************************/

const select = function(){

    var select = $('.select_custom');
    var options = $('.option');
    var defaults = select.find('.default');
    var isShowSelect = false;
    
    $('.select_custom').each(function(){
        var _this = $(this);
        var _thisDefault = _this.find('.default');
        var _thisOptions = _this.find('.option');
        var _thisOptItem = _thisOptions.find('li > a');
    
        _thisDefault.on('click', function(){
            isShowSelect = true;
    
            if($(this).hasClass('on')){
                $(this).removeClass('on').next('ul').hide();
            } else {
                defaults.removeClass('on');
                options.hide();
                $(this).addClass('on').next('ul').show();
                slideMotion($(this),$('ul'));
            }
        });
    
        _thisOptItem.on('click', function(){
            initSelect();
            var selectedText = $(this).text();
            _thisDefault.find('span').text(selectedText);
        });
    });
    
    
    $(document).on('click touchstart', function(e){
        if(isShowSelect && !$(e.target).parents().hasClass('select_custom')){
            initSelect();
        }
    });
    
    function initSelect(){
        isShowSelect = false;
        options.hide();
        defaults.removeClass('on');
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


export default select;