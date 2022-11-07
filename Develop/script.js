// This defines the boolean values for each confirmation of characters by the user as an Object
var valueBool = {
  lowerBool : null,
  upperBool : null,
  numBool : null,
  symbolBool : null
}

// This function will include everythig that is needed to generate the random password
var generatePassword = function() {

  // Listed as an empty password until given the proper commands
  var finalPassword = '';

  // Initializing default values for variables used
  var length = null;

  // Creates the object
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

  // Prompted confirmation displays for what the user wants out of their password
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
    // Tested if the user inputs a string rather than a number for the length value of their password but was not able to find the solution
    // while (length == String) {
    //   window.alert("You need to enter a numeric value.");
    //   length = +(window.prompt("Must use between 8 and 128 characters?"));
    // }
    
    // Checks to make sure the user inputs between 8 and 128 character
    // If they dont, they will be told what they need to complete and re-enter a new value
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
  
  // Defines the confirmation prompts in a single function and returns the answers in an array
  // They will be saved as true or false values (this is important)
  var generateConfirms = function() {
    lowercaseConfirm();
    uppercaseConfirm();
    numericConfirm();
    specialCharConfirm();
    numOfChar();
  }

  // Invokes the main function
  generateConfirms();

  // Loops through i amounts of times based on the users input for length of password
  for (i = 0; i < length; i++) {

    // Here a new array is initialized to store each individually added values
    var emptyArr = [];

    // These will always cycle through independently and will only run if the user has set their value to true
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

    // We are taking a random number from the new array created within this loop and adding it to the final password
    // This allows for the characters to be placed randomly within the password (this is important)
    finalPassword += (emptyArr[Math.floor(Math.random() * emptyArr.length)]);
  }

  // Finally returns the final password to be displayed in the browser
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writes the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

