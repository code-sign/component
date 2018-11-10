/****************************/
/* Layer                    */
/****************************/

const layer = function(){

    $('button').on('click', function(){
        var _button = $(this);
        var layerId = _button.attr('layerId');
        var layer = $('#'+layerId);
        var layerBox = layer.find('.layer_box');
        var layerDim = layer.find('.dim');

        // ScrollBar check - Prevent screen shake
        var body = $('body');
        var outerWidth = $(window).outerWidth();
        var innerWidth = $(window).innerWidth();
        var scrollWidth = outerWidth - innerWidth;
        var isScroll = outerWidth > innerWidth;

        if(layerId != undefined){
            layer.show();
            layerBox.attr('tabindex',0).focus();
            TweenMax.from(layerBox, .3, {scale:.95, y:10});
            TweenMax.from(layerDim, .3, {opacity:0});
            
            body.css({'overflow':'hidden'});
            if(isScroll){
                body.css({'paddingRight':scrollWidth+'px'});
            }
        }

        $('.close, .dim, #btnConfirm').on('click', function(){
            $(this).parents('.layer_wrap').hide();
            _button.focus();

            body.css({'overflow':'auto'});
            if(isScroll){
                body.css({'paddingRight':0});
            }

        });
    });

    $('.layer_box').each(function(){
        var _this = $(this);
        var _focusable = [];
        var _el_firstFocus = '';
        var _el_lastFocus = '';

        _this.find('*').each(function(i, val) {
            if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/) && parseInt(val.getAttribute("tabIndex")) !== -1) {
                _focusable.push(val);
            }
            if((val.getAttribute("tabIndex") !== undefined) && (parseInt(val.getAttribute("tabIndex")) >= 0)) {
                _focusable.push(val);
            }
        });

        _el_firstFocus = _focusable[0];
        _el_lastFocus = _focusable[_focusable.length-1];

        $(_el_firstFocus).on({
            'keydown' : function(e){
                if (e.target == this){
                    var keyCode = e.keyCode;
                    if (keyCode == 9){
                        if (e.shiftKey){
                            $(_el_lastFocus).focus();
                            e.preventDefault();
                        }
                    }
                }
            }
        });
        $(_el_lastFocus).on({
            'keydown' : function(e){
                var keyCode = e.keyCode;
                if (keyCode == 9){
                    if (!e.shiftKey){
                        $(_el_firstFocus).focus();
                        e.preventDefault();
                    }
                }
            }
        });
    });

}


export default layer;