const passwordInput = document.querySelector("#password");
const correctPassword = "aryan";
let btn = document.querySelector(".btn");
btn.addEventListener("click",() =>{
    if(passwordInput.value === correctPassword){
        window.location.href = "main.html";
    }
    else{
        alert("Try again my dear");
    }
})