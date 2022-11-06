// Generating password function
// This is not an object, this is a function

var valueBool = {
  lowerBool : null,
  upperBool : null,
  numBool : null,
  symbolBool : null
}

var generatePassword = function() {

  var finalPassword = '';
  var length = null;

  var valueBoolObj = Object.create(valueBool);
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
    valueBoolObj.lowerBool = window.confirm("Would you like to include lowercase characters?");
  }

  var uppercaseConfirm = function() {
    valueBoolObj.upperBool = window.confirm("Would you like to include uppercase characters?");
  }

  var numericConfirm = function() {
    valueBoolObj.numBool = window.confirm("Would you like to include numeric characters?");
  }

  var specialCharConfirm = function() {
    valueBoolObj.symbolBool = window.confirm("Would you like to include special characters?");
  }

  var numOfChar = function() {
    length = window.prompt("Must use between 8 and 128 characters?");

    // How does this work???
    // while (length == String) {
    //   window.alert("You need to enter a numeric value.");
    //   length = +(window.prompt("Must use between 8 and 128 characters?"));
    // }
    
    while (length < 8 || length > 128) {
      if (length < 8) {
        window.alert("Character length needs to be at least 8.");
      } else if (length > 128) {
        window.alert("Character length cannot exceed 128.");
      } 
      length = window.prompt("Must use between 8 and 128 characters?");
    }
    return length;
  }
  
  var randomValueFunc = function() {
    return [randomLowerValue(), randomUpperValue(), randomNumValue(), randomSymbolValue()];
  }
  //Generates the true or false of confirmations and returns the answers in an array
  var generateConfirms = function() {
    lowercaseConfirm();
    uppercaseConfirm();
    numericConfirm();
    specialCharConfirm();
    numOfChar();
    
    // return valueBoolObj.lowerBool = lowerConf, 
    // valueBoolObj.upperBool = upperConf, 
    // valueBoolObj.numBool = numConf, 
    // valueBoolObj.symbolBool = symbolConf, 
    // length = lengthConf;
  }

  generateConfirms();



  for (i = 0; i < length; i++) {

    var emptyArr = [];

    if (valueBoolObj.lowerBool) {
      emptyArr.push(randomLowerValue());
    }

    if (valueBoolObj.upperBool) {
      emptyArr.push(randomUpperValue());
    } 

    if (valueBoolObj.numBool) {
      emptyArr.push(randomNumValue());
    }

    if (valueBoolObj.symbolBool) {
      emptyArr.push(randomSymbolValue());
    }

    console.log(emptyArr);
    // We are taking a random number from the empty array and adding it to the final string

    finalPassword += (emptyArr[Math.floor(Math.random() * emptyArr.length)]);
    // console.log(finalPassword);
    // finalPassword += userPassword[i];
  }

  return finalPassword;
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

