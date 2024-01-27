const SignInEmailEle = document.getElementById("SignInEmail");
const SignInPasswordEle = document.getElementById("SignInPassword");
const SignInBtn= document.getElementById("SignIn");

function validInput() {
    if(SignInEmailEle.value == "" || SignInPasswordEle.value == "") {
        alert("Enter all detail properly");
        return 0;
    }
    return 1;
}

SignInBtn.onclick = () => {
    if(!validInput()) {
        return;
    }

    let DataBase = getDatabase();
    if(!DataBase[SignInEmailEle.value]) {
        alert('User does not exist, please register first');
        return;
    }
    else {
        if(DataBase[SignInEmailEle.value]['password'] == SignInPasswordEle.value) {
            alert("OK");
            localStorage.setItem("currentuseremail", JSON.stringify(SignInEmailEle.value));
            location.href = "main.html";
        }
        else {
            alert("Incorrect password");
        }
    }
}

console.log("signin.html :\n\n");
console.log("Database : \n", getDatabase());

/**
 * Login - SignIn - Existing User
 * Register - SignUp - New User
 */