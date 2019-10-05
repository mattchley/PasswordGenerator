

function generate(length = prompt("how many characters between 8-128?")) {
    var useUpper = confirm("Would you like to use Uppercase?");
    var useLower = confirm("Would you like to use Lowercase?");
    var useNum = confirm("Would you like to use Numbers?");
    var useSymbols = confirm("Would you like to use Symbols?");
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var replaceUppercase = uppercase.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
    var replaceLowercase = lowercase.replace('abcdefghijklmnopqrstuvwxyz', '');
    var replaceNumbers = numbers.replace('0123456789', '');
    var replaceSymbols = symbols.replace('!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~', '');

    if (useUpper === false) {
        replaceUppercase;
        console.log (useUpper);
    }

    if (useLower === false) {
        replaceLowercase;
        console.log (useLower);
    }

    if (useNum === false) {
        replaceNumbers;
        console.log (useNum);
    }

    if (useSymbols === false) {
        replaceSymbols;
        console.log (useSymbols);
    }
    var password = '';
    var all = uppercase + lowercase + numbers + symbols;

    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
        console.log(password);
    }

   
   
    document.getElementById("password").value = password;
}




// Copies the password text to Clipboard

