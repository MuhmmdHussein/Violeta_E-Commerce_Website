// // Random Imges ===)
// function showRandomImags(){
//     let imgcont   = document.getElementById("imgcont");
//     let allImages = ["Al-Aqsa Mosque.jpg","sudia_arabia.jpg","paris.jpg"];
// // console.log(allImages.length);
// // console.log(randomImage)
//     setInterval (function(){
//         let randomImage = Math.floor(Math.random() * allImages.length );
//         imgcont.src     = allImages[randomImage];
//     },1000)  
// };
// showRandomImags();
// // ______________________________________________________________________________________________
// // Push wardes ===)
// let myText =  "Hello all Welcome to our website. We hope you like our products and our discounts on Black Friday."
// let i      = 0;
// function PushWardes(){
//     let writeWords = setInterval (function (){
//         document.getElementById("paracont").textContent += myText[i]
//         i++;
//         if( i > myText.length - 1){
//             clearInterval(writeWords)
//         }    
//         // console.log(document.getElementById("paracont").textContent = myText[0]) 
//     },100)
// }

// PushWardes()
// _________________________________________________________________________________________________
// Validations ===)
//  validation User Name Input <<<<<===>>>>>
function checkinputUsername(){
    let inputUsername  = document.getElementById("inputUsername").value;
    let patternUserName= /\b[a-z]{3,}\b\s[a-z]{3,}$/;
    let matchinginputUsername = patternUserName.test(inputUsername);
    if(!matchinginputUsername){
        document.getElementById("valid1").textContent = "invalid name";
        valid1.style.backgroundColor = "red"
        valid1.style.width   = "100px";
        valid1.style.padding = "5px"
        document.getElementById("inputUsername").value = " ";
}else{
    document.getElementById("valid1").textContent = " ";
    valid1.style.backgroundColor = "white"
    valid1.style.width   = "0";
    valid1.style.padding = "0";
}
}
//  validation Email Input <<<<<===>>>>>
function checkinputEmail(){
    let inputEmail      = document.getElementById("inputEmail").value;
    let  patternEmail   = /^([a-z]|[0-9])+@([a-z]|[0-9])+(.org|.com|.uk|.edu|.net)(.eg)$/;
    let matchinginputEmail = patternEmail.test(inputEmail);
    if(!matchinginputEmail){
        document.getElementById("valid2").textContent = "invalid email";
        valid2.style.backgroundColor = "red"
        valid2.style.width   = "100px";
        valid2.style.padding = "5px"
        document.getElementById("inputEmail").value = " ";
}else{
    document.getElementById("valid2").textContent = " ";
    valid2.style.backgroundColor = "white"
    valid2.style.width   = "0";
    valid2.style.padding = "0";
}
}
//  validation Email Input <<<<<===>>>>>
function checkinputPhone(){
    let inputPhone     = document.getElementById("inputPhone").value;
    let patternPhone   = /([0-9]{3}-[0-9]{2}-[0-9]{3})$/;
    let matchinginputPhone = patternPhone.test(inputPhone);
    if(!matchinginputPhone){
        document.getElementById("valid3").textContent = "invalid number";
        valid3.style.backgroundColor = "red"
        valid3.style.width   = "110px";
        valid3.style.padding = "5px"
        document.getElementById("inputPhone").value = " ";
}else{
    document.getElementById("valid3").textContent = " ";
    valid3.style.backgroundColor = "white"
    valid3.style.width   = "0";
    valid3.style.padding = "0";
}
}
//  validation Password Input <<<<<===>>>>>
function checkinputPassword(){
    let firstPassword  = document.getElementById("firstPassword").value;
    let secondPassword = document.getElementById("secondPassword").value;
    if (firstPassword !== secondPassword) {
        document.getElementById("valid4").textContent = "password and Confirm password should be the same";
        document.getElementById("valid4").style.backgroundColor = "red";
        document.getElementById("firstPassword").value= " ";
        document.getElementById("secondPassword").value= " ";
    }
    else {
        document.getElementById("valid4").textContent = " ";
        document.getElementById("valid4").style.backgroundColor = "white";
    }
}
function submitPage(){
    window.location = ("")
};



// / =============================== Storage Part ==================================================

// Register
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
            window.location = "login.html";
        }, 2000);
    }
});


// ===========================================================================
