/****************************/
/* form                     */
/****************************/
const form = function(){

    /****************************/
    /* checkbox & radio focus   */
    /****************************/
    var checkBox = $('input[type="checkbox"');
    var radio = $('input[type="radio"');

    checkBox.each(function(){
        ipFocus($(this),$('.checkwrap'));
    });

    radio.each(function(){
        ipFocus($(this),$('.radiowrap'));
    });

    function ipFocus(_this,ipWrap){
        var ipGroup = _this.parent(ipWrap)
        _this.on('focus', function(){
            ipGroup.addClass('focus');
        }).on('blur', function(){
            ipGroup.removeClass('focus');
        });
    }


    /****************************/
    /* Input - File             */
    /****************************/
    $('.file').each(function(){
        var inputFile =  $(this).find('input[type=file]');
        var fileName = $(this).find('.filename')
        inputFile.change(function() {
            var filepath = this.value;
            var m = filepath.match(/([^\/\\]+)$/);
            var filename = m[1];
            fileName.html(filename);
        });
    });
}

export default form;
