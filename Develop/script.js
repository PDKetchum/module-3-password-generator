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
  // variables holding the different characters
  var uppercaseCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var lowercaseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "`",
    "~",
    ",",
    ".",
    "?",
    "/",
  ];

  var numbericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var selectedCharacters = [];

  // i.e uppercase = ['A', 'B', 'C']
  // var selectedCharacters = []
  // I need to use prompt() to gather password criteria
  var passwordLength = prompt(
    "How many characters would you like in your password?"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    return "Please pick one number between 8-128";
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

  if (!useUppercase && !useLowercase && !useSpecial && !useNumeric) {
    alert("You must pick at least one character type.");
  }

  // if a confirm is true then concat related arr to selected characters arr
  // array compunds based of statement below
  if (useUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
  }

  if (useLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
  }

  if (useSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  if (useNumeric) {
    selectedCharacters = selectedCharacters.concat(numbericCharacters);
  }

  // i.e ['A', 'B', 'C', a, b, c, 1, 2, 3, %, $, #]
  // var selectedCharacters = [];
  // var uppercaseCharacters = ['A', 'B', 'C'];
  // if(isUppercase) {
  //   selectedCharacters.concat(uppercaseCharacters);
  // }
  // for loop based on password length prompt
  // use Math.floor(Math.random() * selectedCharacters.length) to get random index of selectedCharacters
  // i needs to increase each time to become the password length as soon as pw length selected it will stop runnning
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var index = Math.floor(Math.random() * selectedCharacters.length);
    var randomCharacter = selectedCharacters[index];
    password = password + randomCharacter;
  }

  // return password text

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
