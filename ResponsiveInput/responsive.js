/** 
 * param: Object[input]
 *        Object[select]
 *        boolean
*/
function responsiveDropdown(inputText, select, isDirectInput) {
    inputText.value = select.value;
    if (isDirectInput && select.getElementsByTagName('option')[0].selected) {
        inputText.readOnly = false;
    } else {
        inputText.readOnly = true;
    }
}
/** 
 * param: Object[input]
 *        STRING or INT
*/
function checkLengthMax(obj, max) {
    var target = obj.value;
    target = "" + target;

    if(target.length > max) {
        target = target.substring(0,max);
        obj.value = target;
    }
}

/** 
 * param: Object[input[type=checkbox]]
*/
function checkAllFnc(checkAll) {
    var checkboxList = $('input[type=checkbox]');

    if (checkAll.checked) {
        $.each(checkboxList, function (i, checkbox) {
            if (i != 0) checkbox.checked = true;
        })
    } else {
        $.each(checkboxList, function (i, checkbox) {
            if (i != 0) checkbox.checked = false;
        })
    }
}