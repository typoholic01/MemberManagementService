/** 
 * var1: Object[input]
 * var2: Object[select]
 * var3: boolean
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
 * var1: Object[input]
 * var2: STRING or INT
*/
function checkLengthMax(obj, max) {
    var target = obj.value;
    target = "" + target;

    if(target.length > max) {
        target = target.substring(0,max);
        obj.value = target;
    }
}