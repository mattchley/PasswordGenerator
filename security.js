// Makes the password length between 8-128
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// Makes the password
function generate( length = random(8, 128) ){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    document.getElementById("password").value = password; 
}
// Copies the password text to Clipboard
