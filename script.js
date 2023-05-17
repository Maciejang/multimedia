let page = document.querySelector(".page");

document.querySelector(".box1").addEventListener("click", _=>{
    page.style.width = "70vw";
    page.style.height = "70vh";
    page.style.opacity = 1;
    document.querySelector(".close").style.width = "2vw";
    document.querySelector(".close").style.height = "2vw";

})

document.querySelector(".close").addEventListener("click", _=>{
    page.style.width = "0vw";
    page.style.height = "0vh";
    page.style.opacity = 0;
    document.querySelector(".close").style.width = "0vw";
    document.querySelector(".close").style.height = "0vh";

})