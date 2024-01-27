// SignUpBtn, SignUpEmail, SignUpUsername, CreatePasswordEle, ConfirmPasswordEle, 

const SignUpBtn = document.getElementById("SignUpBtn");
const SignUpUsernameEle = document.getElementById("SignUpUsername");
const SignUpEmailEle = document.getElementById("SignUpEmail");
const CreatePasswordEle = document.getElementById("CreatePassword");
const ConfirmPasswordEle = document.getElementById("ConfirmPassword");

// localStorage.clear();

function valid() {
    if(SignUpUsernameEle.value == "" || SignUpEmailEle.value == "" || CreatePasswordEle.value == "" || ConfirmPasswordEle.value == "") {
        alert("Enter each deatil properly");
        return false;
    }
    else if(CreatePasswordEle.value != ConfirmPasswordEle.value) {
        alert("Passwords did not match");
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(SignUpEmailEle.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("Email is not valid.");
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password.length < 6 || password.length > 20) {
       return false;
    }
 
    let hasDigit = false;
    let hasLowercase = false;
    let hasUppercase = false;
    let hasSpecialChar = false;
    const specialChars = "!@#$%^&*()-+.";
 
    for (let i = 0; i < password.length; i++) {
       const char = password[i];
 
       if (/[0-9]/.test(char)) {
          hasDigit = true;
       } else if (/[a-z]/.test(char)) {
          hasLowercase = true;
       } else if (/[A-Z]/.test(char)) {
          hasUppercase = true;
       } else if (specialChars.includes(char)) {
          hasSpecialChar = true;
       }
 
       if (hasDigit && hasLowercase && hasUppercase && hasSpecialChar) {
          return true;
       }
    }
    return false;
 }
 

  
  

SignUpBtn.onclick = function() {
    if(!valid() || validatePassword(CreatePasswordEle.value)) {
        return;
    }
    let DataBase = getDatabase();
    DataBase[SignUpEmailEle.value] = {};
    DataBase[SignUpEmailEle.value]["email"] = SignUpEmailEle.value;
    DataBase[SignUpEmailEle.value]["username"] = SignUpUsernameEle.value;
    DataBase[SignUpEmailEle.value]["password"] = CreatePasswordEle.value;
    setDatabase(DataBase);
    console.log(getDatabase());
    localStorage.setItem("currentuseremail", JSON.stringify(DataBase[SignUpEmailEle.value]["email"]));
    console.log(localStorage);
    window.location.href = "main.html";
}

console.log("signup.html :\n\n");
console.log("Database : \n", getDatabase());
