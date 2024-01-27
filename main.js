const submitEle = document.getElementById("Submit");
const PorLEle = document.getElementById("PorL");
const UsernameEle = document.getElementById("Username");
const LogoutEle = document.getElementById("Logout");

let email = JSON.parse(localStorage.getItem("currentuseremail"));
if(!email) {
    window.location.href = "signin.html";
}
LogoutEle.onclick = function logfun() {
    localStorage.removeItem("currentuseremail");
    window.location.href = "signin.html";
    location.reload();
}
UsernameEle.innerHTML = "👨🏻‍💻 " + getDatabase()[email]["username"] + " 👨🏻‍💻";

showHistory(getHistory(email));
console.log("main.html : \n\n");
console.log("Database : \n", getDatabase());
console.log("Current Database : \n", getDatabase()[email]);