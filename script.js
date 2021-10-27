// Assignment code here

//create arrays for character types
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {

  //Add promp to get user password length

  var passwordLength = prompt("Pick a password length between 8 and 128 characters")

  //validate the password length prompt

  if (!passwordLength) {
    alert("please enter a number between 8 and 128");
    return
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("please enter a number between 8 and 128");
    return
  } else {
    alert("nice choice")
  }

  //add window confirm to get a checkbox on character types
  var lowercase = window.confirm("Would you like to use lowercase characters in your password")
  var uppercase = window.confirm("Would you like to use uppercase characters in your password")
  var numeric = window.confirm("Would you like to use numeric characters in your password")
  var special = window.confirm("Would you like to use special characters in your password")

  //validate window confirm checkboxes so at least one box is picked 

  if (!special && !numeric && !uppercase && !lowercase) {
    alert("You must choose at least one option");
    return
  } else {
    alert("great selection")
  }
  
  //create conditonal logic to combine the arrays into single arraybox

  let arrayBox = [];

  //declare a varaible to hold combined arrays in

  if (special) {
    arrayBox = arrayBox.concat(specialArray)
  }
  if (numeric) {
    arrayBox = arrayBox.concat(numericArray)
  }
  if (uppercase) {
    arrayBox = arrayBox.concat(uppercaseArray)
  }
  if (lowercase) {
    arrayBox = arrayBox.concat(lowercaseArray)
  }

  var generatedNumber = ''
  //from the combined array box pick randomized characters based on the password length

  for (let index = 0; index < passwordLength; index++) {
    let randomcounter = Math.floor(Math.random() * arrayBox.length)

    let randomdata = arrayBox[randomcounter]

    generatedNumber = generatedNumber + randomdata;
  }


  //with the random charcter generated it return the value so the password will generate
  return generatedNumber;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === undefined) {
    password = "Try Again"
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
