// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercaselist =["A","B"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
var lengthprompt = prompt ("Password Length")

if (lengthprompt<8){
  alert("Must be greater than 8")
  return
}
if (lengthprompt>128){
  alert("Must be 128 or less")
  return
}
if (isNaN(lengthprompt)){
  alert("Please use Numbers")
  return
}

var lowercaseprompt = confirm ("Include Lowercase?")

var uppercaseprompt = confirm ("Include Uppercase?")

var includenumbers = confirm ("Include Numbers?")

var includesymbols = confirm ("Include Symbols?")

if (lowercaseprompt===true){
  
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

