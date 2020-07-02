// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  // password length
  var selectedLength = prompt('Character length: between 8 and 128');

  //validate input length
  if (selectedLength < 8 || selectedLength > 128) {
    alert(
      'The password should be at least 8 characters and no more than 128 characters'
    );
    return generatePassword();
  }

  // types
  var includeLowerCase = confirm('Do you want to include lowercase?');

  var includeUpperCase = confirm('Do you want to include uppercase?');

  var includeNumeric = confirm('Do you want to include numeric?');

  var includeSpecial = confirm('Do you want to include special characters');

  //validate input types
  if (
    !(includeLowerCase || includeUpperCase || includeNumeric || includeSpecial)
  ) {
    alert('You must choose at least one type');
    return generatePassword();
  }

  // all different types of characters
  var numeric = '0123456789';
  var literal = 'qwertyuiopasdfghjklzxcvbnm';
  var special = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

  // initialize the password
  var password = '';

  // track how many confirms we got yet
  var confirms = 0;

  // avaliable characters for generatating random password
  var characters = '';

  if (includeLowerCase) {
    characters += literal;
    password += randomPickFromArray(literal);
    confirms++;
  }

  if (includeUpperCase) {
    characters += literal.toUpperCase();
    password += randomPickFromArray(literal.toUpperCase());
    confirms++;
  }

  if (includeNumeric) {
    characters += numeric;
    password += randomPickFromArray(numeric);
    confirms++;
  }

  if (includeSpecial) {
    characters += special;
    password += randomPickFromArray(special);
    confirms++;
  }

  for (var i = 0; i < selectedLength - confirms; i++) {
    password += randomPickFromArray(characters);
  }

  return password;
}

function randomPickFromArray(a) {
  var index = Math.floor(Math.random() * a.length);
  return a[index];
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
