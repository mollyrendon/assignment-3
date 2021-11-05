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
    generatePassword(upper); 
    break;
    case"upper":
    generatePassword(upper);
    break;
    case"LOWER":
    generatePassword(lower); 
    break;
    case"lower":
    generatePassword(lower);
    break;
    case"BOTH":
    generatePassword(both); 
    break;
    case"both":
    generatePassword(both);
    break;

    default:
      console.log(`You didn't pick one of the options.  Please pick a valid option.`);
      passwordCase();
  }
  console.log(passCase);
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
      console.log(`You didn't pick one of the options.  Please pick a valid option.`);
      passwordSpecNum();
  }
  console.log(passSpecNum);

}




function generatePassword(casetype) {

  function getPass(parameter) {
    for (i=0; i < passwordLength; i++){
      var newPass = Math.floor(Math.random() * (parameter.length +1));
      password = password + parameter.charAt(newPass);
    }
    password.reset();
    return password;
  }

  if (casetype == 'upper') {
    getPass(paramsUpper); // here we will pass our list of accepted upper case characters, ideally as a variable we set elsewhere
  }  
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