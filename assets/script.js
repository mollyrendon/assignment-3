// Assignment code here
var passLength = 0;
var passCase = "";
var passCaseLower = "abcdefghijklmnopqrstuvwxyz"
var passCaseUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passNumber ="0123456789"
var passSpecial = "!@#$%^&*()"
var passSpecNum = "";
var parameter = "";

function passwordLength() {
  while(passLength < 8 || passLength > 128 || (passLength%1)!=0){
    passLength = window.prompt ("How long do you want your password?  It cannot be longer than 128 characters.  Minimum of 8 characters.");
    console.log(passLength);
  }  
  
}

function passwordCase() {
  passCase = window.prompt ("Would you like to include UPPER case, LOWER case, or BOTH?");
  
  passCase = passCase.trim();
  passCase = passCase.toLowerCase();

  
  switch(passCase){
    case"upper":
    parameter = parameter + passCaseUpper;
    break;
    case"lower":
    parameter = parameter + passCaseLower;
    break;
    case"both":
    parameter = parameter + passCaseUpper + passCaseLower;
    break;

    default:
      window.alert(`You didn't pick one of the options.  Please pick a valid option.`);
      passwordCase();
  }
  console.log(parameter);
}

function passwordSpecNum() {
  passSpecNum = window.prompt ("Would you like to include NUMBERS, SPECIAL characters, or BOTH?");
  
  passSpecNum = passSpecNum.trim();
  passSpecNum = passSpecNum.toLowerCase();
  
  switch(passSpecNum){
    case"numbers":
    parameter = parameter + passNumber;
    break;
    case"special":
    parameter = parameter + passSpecial;
    break;
    case"both":
    parameter = parameter + passNumber + passSpecial;
    break;

    default:
      window.alert(`You didn't pick one of the options.  Please pick a valid option.`);
      passwordSpecNum();
  }
  console.log(parameter);

}


function getPass() {
  
  var password = "";
  var newPass = "";

    for (i=0; i < passLength; i++){
      newPass = Math.floor(Math.random() * (parameter.length +1));
      password = password + parameter.charAt(newPass);
      console.log(password)
    }
    return password;
}

function generatePassword() {

  passwordLength();
  passwordCase();
  passwordSpecNum();
  var result = getPass();
  passLength = 0;
  return result;
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