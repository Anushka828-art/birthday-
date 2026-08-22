console.log("anushka")
let button=document.querySelector(".btn");
let cover = document.querySelector(".cover");
button.addEventListener("click",() =>{
     cover.classList.add("open");
});
let button1 = document.querySelector(".btn1");
let page1 = document.querySelector(".page1");
let button2 = document.querySelector(".btn2");
button1.addEventListener("click",()=>{
    page1.classList.add('open');
})
button2.addEventListener("click",()=>{
    cover.classList.remove("open");
})
let page2 = document.querySelector(".page2");
let button3= document.querySelector(".btn3");
let button4 = document.querySelector(".btn4");
button3.addEventListener("click",()=>{
    page2.classList.add('open');
})
button4.addEventListener("click",()=>{
    page1.classList.remove("open");
})
let page3 = document.querySelector(".page3");
let button5= document.querySelector(".btn5");
let button6 = document.querySelector(".btn6");
button5.addEventListener("click",()=>{
    page3.classList.add('open');
})
button6.addEventListener("click",()=>{
    page2.classList.remove("open");
})
let page4 = document.querySelector(".page4");
let button7 = document.querySelector(".btn7");
let button8 = document.querySelector(".btn8");
// button7.addEventListener("click",() =>{
//     page4.classList.add('open');
// })
// button8.addEventListener("click",() =>{
//     page3.classList.remove("open");
// });
let page5 = document.querySelector(".page5");
let button9 = document.querySelector(".btn9");
let button10 = document.querySelector(".btn10");
button9.addEventListener("click",() =>{
    window.location.href ="reel.html";
})
button10.addEventListener("click",() =>{
     page3.classList.remove('open');
})
