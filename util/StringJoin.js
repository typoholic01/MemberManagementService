
//joinPhone
function joinPhone() {
    var phone0 = document.getElementById('phone0').value;
    var phone1 = document.getElementById('phone1').value;
    var phone2 = document.getElementById('phone2').value;
    document.getElementById('phone').value = phone0 + '-' + phone1 + '-' + phone2;
}