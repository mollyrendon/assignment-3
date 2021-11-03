// Assignment code here
var passLength = 0;
var passCase = "";
var passSpecNum = "";

function passwordLength() {
  while(passLength < 8 || passLength > 128 || (passLength%1)!=0){
    passLength = window.prompt ("How long do you want your password?  It cannot be longer than 128 characters.  Minimum of 8 characters.");
    console.log(passLength);
  }  
  
}

function passwordCase() {
  passCase = window.prompt ("Would you like to include UPPER case, LOWER case, or BOTH?");
  switch(passCase){
    case"UPPER": 
    break;
    case"upper":
    break;
    case"LOWER":
    break;
    case"lower":
    break;
    case"BOTH":
    break;
    case"both":
    break;

    default:
      passwordCase();
  }
}

function passwordSpecNum() {
  passSpecNum = window.prompt ("Would you like to include NUMBERS, SPECIAL characters, or BOTH?");
  switch(passSpecNum){
    case"NUMBERS": 
    break;
    case"numbers":
    break;
    case"SPECIAL":
    break;
    case"special":
    break;
    case"BOTH":
    break;
    case"both":
    break;

    default:
      passwordSpecNum();
  }
  console.log(passSpecNum);
}

function generatePassword() {
  passwordLength();
  passwordCase();
  passwordSpecNum();
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


window.alert("This is an alert! JavaScript is running!");