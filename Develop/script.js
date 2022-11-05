// Generating password function
// This is not an object, this is a function
var generatePassword = function() {

  var userPassoword = '';

  var lower = '';
  var upper = '';
  var num = '';
  var symbol = '';
  var length = null;

  //This needs to return a number based upon the true value for the For loop
  var typeCount = [lower, upper, num, symbol];
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
  
  var randomValueFunc = function() {
    return [randomLowerValue(), randomUpperValue(), randomNumValue(), randomSymbolValue()];
  }
  //Generates the true or false of confirmations and returns the answers in an array
  var generateConfirms = function() {
    var lowerConf = lowercaseConfirm();
    var upperConf = uppercaseConfirm();
    var numConf = numericConfirm();
    var symbolConf = specialCharConfirm();
    var lengthConf = numOfChar();
    
    return typeCount[0] = lowerConf, typeCount[1] = upperConf, typeCount[2] = numConf, typeCount[3] = symbolConf, length = lengthConf;
  }

  generateConfirms();
  // For the length of the confirmed length
    for (i = 0; i < length; i++) {
      // Run code for each count type
      for (i = 0; i < typeCount.length; i++) {
        if (typeCount[i]) {
          //This does recognize when there is a true value
          console.log('made it here');
          return userPassoword = userPassoword + randomValueFunc()[i];
        }
        return;
      }
      return;
    }

    return userPassoword;
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

