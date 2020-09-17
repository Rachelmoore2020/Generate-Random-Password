var uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
    var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ">", "<", "{", "}"];
    var allowedChars = [];
    
// generatePassword()
function generatePassword () {
    var wantUppercase = confirm("Do you want uppercase letters?");
    var wantLowercase = confirm("Do you want lowercase letters?");
    var wantNumbers = confirm("Do you want numbers?");
    var wantSymbols = confirm("Do you want symbols?");

    if (!wantUppercase && !wantLowercase && !wantNumbers && !wantSymbols) {
      alert("You must choose at least one!");
      generatePassword ()
    }
    
    var passwordLength = prompt("how many characters do you want your password to be", "Enter a number between 8 and 128"); 

    if (wantUppercase) {
        allowedChars=allowedChars.concat(uppercase);
        console.log(allowedChars);
    }
    if (wantLowercase) {
      allowedChars=allowedChars.concat(lowercase);
      console.log(allowedChars);
    }
    if (wantNumbers) {
      allowedChars=allowedChars.concat(numbers);
      console.log(allowedChars);
    }
    if (wantSymbols) {
      allowedChars=allowedChars.concat(symbols);
      console.log(allowedChars);
    }
    console.log(allowedChars);

  
    // function generatePassword() {
var password="";
        for(var i = 0; i < passwordLength; i++) {
            var random = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[random];

        }
        console.log(password);
        return password;
  }
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);