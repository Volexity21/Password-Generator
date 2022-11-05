

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
  var symbolSet = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbolSet[Math.floor(Math.random() * symbolSet.length)];
}

// Confirmation boxes on which characters user would like to use
var lowercaseConfirm = function() {
  return window.confirm("Would you like to include lowercase characters?");
}

var uppercaseConfirm = function() {
  return window.confirm("Would you like to include uppercase characters?");
}

var numericConfirm = function() {
  return window.confirm("Would you like to include numeric characters?");
}

var specialCharConfirm = function() {
  return window.confirm("Would you like to include special characters?");
}

var numOfChar = function() {
  return window.prompt("Must use between 8 and 128 characters?")
}

// Listed the confirmed cases as variables
var generateConfirms = function() {
  var lower = lowercaseConfirm();
  var upper = uppercaseConfirm();
  var num = numericConfirm();
  var symbol = specialCharConfirm();
  var length = +numOfChar();

  console.log(lower, upper, num, symbol, length);
  console.log(lower + upper + num + symbol);
}


// Generating password function
var generatePassword = function() {
  var generatedPassword = '';
  generateConfirms();

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

