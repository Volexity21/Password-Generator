// Random value generators

var randomLowerValue = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));   
}

var randomUpperValue = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

var randomNumValue = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

var randomSymbolValue = function() {
  var symbolSet = '!@#$%^&*?<>[]{}=,.';
  return symbolSet[Math.floor(Math.random() * symbolSet.length)];
}


var generatePassword = function() {
  var userInputLength = window.prompt("Length of password?")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

