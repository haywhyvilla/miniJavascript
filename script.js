// object to store function
let userDetailsDatabase = {};
function getUserDetails() {
  //username
  let userName = prompt("Enter your username");

  if (userName == null) {
    return;
  }

  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  while (validateUserName(userName) == false) {
    userName = prompt("Username must be less than 10 and greater then 0");
  }

  userDetailsDatabase["userName"] = userName;

  // email address

  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }

  function validateEmail(email) {
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while (validateEmail(email) == false) {
    email = prompt("Input correct Email address");
  }
  userDetailsDatabase["Email"] = email;
  // phone number

  let phoneNumber = prompt("Enter your phone number");

  if (phoneNumber == null) {
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }

  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be eleven digits");
  }

  userDetailsDatabase["Phone Number"] = phoneNumber;

  // password

  let password = prompt("Enter your password");

  if (password == null) {
    return;
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  while (validatePassword(password) == false) {
    password = prompt("password must be more than 6 characters");
  }

  userDetailsDatabase["password"] = password;

  // comfirm password

  let confirmPassword = prompt("comfirm your password");

  if (confirmPassword == null) {
    return;
  }

  function validateComfirmPassword(comfirmPassword) {
    if (confirmPassword !== password) {
      return false;
    } else {
      return true;
    }
  }

  while (validateComfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Must match your password");
  }

  userDetailsDatabase["ConfirmPassword"] = confirmPassword;
}

function displayUserDetails() {
  alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}
  phone Number: ${userDetailsDatabase.phoneNumber}\n
  Email: ${userDetailsDatabase.Email}`);
}
