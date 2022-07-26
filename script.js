// Assignment code here


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

//im sorry i didnt get anything done. i may be high functioning autistic but that doesnt mean i can handle everything i was supposed to this week or the last one. too many things kept coming up and i kept resorting to coping mechanisms to help process all the stress instead of getting work done. by the time i finally asked for help it was too late and my step dad who works in the field wouldnt even help me.
//i will try to do better this coming week but i make no promises. online learning is way more difficult for me to do than actually learning in a classroom. 