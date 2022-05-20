// GLOBAL VARIABLES
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseCharacters = ["a", "b", "c", "e", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Function to get options from user input

function userOptions() {

  var passwordLength = window.prompt("How many characters does your password need to be?");
  passwordLength = parseInt(passwordLength);

  var includeSpecialCharacters = window.confirm("Include special characters?");

  var includeNumbers = window.confirm("Include numbers?");

  var includeUpperCase = window.confirm("Include Uppercase letters?");

  var includeLowerCase = window.confirm("Include lowercase letters?");

  var userInput = {
    passwordLength,
    includeSpecialCharacters,
    includeNumbers,
    includeUpperCase,
    includeLowerCase
  }
  // return the object to the caller
  return userInput;
};



// Function to generate password 
function generatePassword() {
  var userResponses = userOptions();
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  var password = [];

  if (userResponses.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
    var random = Math.floor(Math.random() * specialCharacters.length);
    guaranteedCharacters = guaranteedCharacters.concat(specialCharacters[random]);
  }

  if (userResponses.includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    console.log(possibleCharacters);
    var random = Math.floor(Math.random() * numericCharacters.length);
    guaranteedCharacters = guaranteedCharacters.concat(numericCharacters[random]);
  }

  if (userResponses.includeUpperCase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    console.log(possibleCharacters);
    var random = Math.floor(Math.random() * uppercaseCharacters.length);
    guaranteedCharacters = guaranteedCharacters.concat(uppercaseCharacters[random]);
  }

  if (userResponses.includeLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    console.log(possibleCharacters);
    var random = Math.floor(Math.random() * lowercaseCharacters.length);
    guaranteedCharacters = guaranteedCharacters.concat(lowercaseCharacters[random]);
  }

  // for loop apends random and guaranteed characters to password variable to be returned to writePassword()
  for (var i = 0; i < userResponses.passwordLength-guaranteedCharacters.length; i++) {
    var idx = Math.floor(Math.random() * possibleCharacters.length);

    password=password.concat(possibleCharacters[idx]);
    
  };
  password = password.concat(guaranteedCharacters);

  return password.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
