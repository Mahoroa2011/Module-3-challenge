// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercaselist =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaselist =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberlist =["0","1","2","3","4","5","6","7","8","9"]
var symbolslist =["!","@","#","$","%","^","&","*","?","."]
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
var possiblecharacters =[]
var lowercaseprompt = confirm ("Include Lowercase?")

var uppercaseprompt = confirm ("Include Uppercase?")

var includenumbers = confirm ("Include Numbers?")

var includesymbols = confirm ("Include Symbols?")

if (lowercaseprompt===true){
 possiblecharacters= possiblecharacters.concat(lowercaselist)
}

if (uppercaseprompt===true){
  possiblecharacters= possiblecharacters.concat(uppercaselist)
}

if (includenumbers===true){
  possiblecharacters= possiblecharacters.concat(numberlist)
}

if (includesymbols===true){
  possiblecharacters= possiblecharacters.concat(symbolslist)
}

console.log(possiblecharacters)
console.log(possiblecharacters[0])
console.log(possiblecharacters.length)
var generatedpassword="";
for(var i=0;i<lengthprompt;i++)
{
  generatedpassword+=possiblecharacters[Math.floor(Math.random()*possiblecharacters.length)]
}
console.log(generatedpassword)

return generatedpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

