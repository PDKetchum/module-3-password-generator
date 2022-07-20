// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// declare function generatePassword()
function generatePassword() {

}

// variables holding the different characters
var uppercaseCharacters = ['A', 'B', 'C',];

var lowercaseCharacters = ['a', 'b', 'c',];

var specialCharacters = ['!', '@', '#', '$', '%',];

var numbericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var selectedCharacters = [];

// i.e uppercase = ['A', 'B', 'C']
// var selectedCharacters = []
// I need to use prompt() to gather password criteria
var passwordLength = prompt("How many characters would you like in your password?") {
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
}

// var passwordLength = prompt("How many characters would you like in your password?")
// if password length is less than 8 stop function
// if password length is greater than 128 stop function
// confirm() for uppercase letters
// confirm() for lowercase letters
// confirm() for special characters
// confirm() for numeric characters

var useUppercase = confirm("Do you want uppercase characters?");
var useLowercase = confirm("Do you want lowercase characters?");
var useSpecial = confirm("Do you want special characters?");
var useNumeric = confirm("Do you want numeric characters?");


// once each confirm/prompt has been answered 
// if confirms are true keep or get character type for the confirm
// if no confirm is true stop function

if (!useUppercase && !useLowercase && useSpecial && useNumeric) {
  alert("You must ")
}


// if a confirm is true then concat related arr to selected characters arr
// i.e ['A', 'B', 'C', a, b, c, 1, 2, 3, %, $, #]
// var selectedCharacters = [];
// var uppercaseCharacters = ['A', 'B', 'C'];
// if(isUppercase) {
//   selectedCharacters.concat(uppercaseCharacters);
// }
// for loop based on password length prompt
// use Math.floor(Math.random() * selectedCharacters.length) to get random index of selectedCharacters
// return password text

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
