// Assignment Codes
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"; 
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Function to determine length of password 
function determineLength(){
  passwordLength = prompt("Please choose the number of characters you would like your password to be (between 8-128 characters): ");

  if (passwordLength<8){
    alert("Password length must be a number between 8-128 characters. (Please only enter a number between 8-128!)");
    determineLength();
  }
  else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters. (Please only enter a number between 8-128!)");
    determineLength();
  }
  else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters. (Please only enter a number between 8-128!)");
    determineLength();
  }
  else {
    alert("Please be informed for the next three prompts, you will be asked what type of characters you would like to be included in your password. If you choose 'No' for all, your password will only contain lowercase letters.");
  }
   return passwordLength; 
};

//Function to determine if user wants to include uppercase letters in the password 
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? (Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null){
    alert("Please only answer Yes or No");
    determineUppercase();
  }
  else if (uppercaseCheck === "yes"){
    uppercaseCheck = true; 
    return uppercaseCheck; 
  }
  else if (uppercaseCheck === "no"){
    uppercaseCheck = false; 
    return uppercaseCheck; 
  }
  else {
    alert("Please only answer Yes or No");
    determineUppercase();
  }
    return uppercaseCheck; 
};

// Function to determine if user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null){
    alert("Please only answer Yes or No");
    determineNumbers();
  }
  else if (numberCheck === "yes") {
    numberCheck = true; 
    return numberCheck; 
  }
  else if (numberCheck === "no"){
    numberCheck = false; 
    return numberCheck;
  }
  else {
    alert("Please only answer Yes or No"); 
    determineNumbers(); 
  }
    return numberCheck;
};

//Function used to determine if user wants to include special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? (Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null){
    alert("Please only answer Yes or No");
    determineSpecial();
  }
  else if (specialCheck === "yes"){
    specialCheck = true;
    return specialCheck;
  }
  else if (specialCheck === "no"){
    specialCheck = false;
    return specialCheck;
  }
  else {
    alert("Please only answer Yes or No");
    determineSpecial();
  }
    return specialCheck;
};

 // Function used to take all the information from the previous functions and generate a password 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
  
  if (uppercaseCheck && numberCheck && specialCheck){
  characters = characters + uppercaseChar + numberChar + specialChar;
}
  else if (uppercaseCheck && numberCheck){
  characters = characters + uppercaseChar + numberChar;
}
  else if (numberCheck && specialCheck){
  characters = characters + numberChar + specialChar;
}
  else if (uppercaseCheck && specialCheck){
  characters = characters + uppercaseChar + specialChar;
}
  else if (uppercaseCheck){
  characters = characters + uppercaseChar;
}
  else if(numberCheck){
  characters = characters + numberChar;
}
  else if (specialCheck){
  characters = characters + specialChar;
}
  else{
  characters === lowercaseChar;
}
  for(var i = 0; i < passwordLength; i++){
    password = password + characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
