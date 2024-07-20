

let userName = document.getElementById("inputUsername");
let userPass = document.getElementById("firstPassword");
let userPass2 = document.getElementById("secondPassword");

let registerBtn = document.getElementById("regBtn");

registerBtn.addEventListener("click", function (a) {
    a.preventDefault();
    if (userName.value === "" || userPass.value === "" || userPass2.value === "") {
        alert("Please fill in all fields!");
    } else {
        localStorage.setItem("username", userName.value);
        localStorage.setItem("userPass", userPass.value);
        localStorage.setItem("userPass2", userPass2.value);

        setTimeout(() => {
            window.location = "home.html";
        }, 2000);
    }
});