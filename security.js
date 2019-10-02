
// needs to have alerts to confirm for lower, upper, numbers, symbols 
// Makes the password
function generate(length = prompt("how many characters between 8-128?")) {
    var uCase = prompt("Would you like to use Uppercase? Y/N");
    var lCase = prompt("Would you like to use Lowercase? Y/N");
    var num = prompt("Would you like to use Numbers? Y/N");
    var symbols = prompt("Would you like to use Symbols? Y/N");
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
